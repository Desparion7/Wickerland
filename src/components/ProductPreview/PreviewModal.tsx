/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/control-has-associated-label */
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiCloseFill } from 'react-icons/ri';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import styles from './PreviewModal.module.css';
import { addItem } from '../../app/slices/cartSlice';
import { toggleCartMenu } from '../../app/slices/slideMenuSlice';
import { store } from '../../app/store';
import {
  wishListAddItem,
  wishListRemoveItem,
  wishList,
} from '../../app/slices/wishListSlice';
import {
  useUpdateUserCartMutation,
  useUpdateUserWishListMutation,
} from '../../app/slices/usersApiSlice';
import LoadingSpinnerOnButton from '../../ui/LoadingSpinnerOnButton';
import { currentToken } from '../../app/slices/authSlice';

interface PropsType {
  setShowPreviewModal: React.Dispatch<React.SetStateAction<boolean>>;
  product: {
    pid: string;
    img: string[];
    category: string;
    name: string;
    amount: number;
    price: number;
  };
}

const PhotoFull = ({ setShowPreviewModal, product }: PropsType) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(currentToken);
  const [productAmount, setProductAmount] = useState(1);
  const wishListProducts = useSelector(wishList);
  const isAddToWishList = wishListProducts.find(
    (obj) => obj.pid === product.pid
  );

  const [updateCart, { isLoading: addCartLoading, isSuccess: addCartSuccess }] =
    useUpdateUserCartMutation();
  const [updateWishList] = useUpdateUserWishListMutation();
  // useEffect to close full screen img on ESC
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setShowPreviewModal(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowPreviewModal]);

  const handelNavigation = (id: string, category: string) => {
    navigation(`/produkt/${category}/${id}`);
  };

  // add product to cart
  const handlerAddToCart = () => {
    dispatch(
      addItem({
        pid: product.pid,
        name: product.name,
        qty: 1,
        amount: product.amount,
        price: product.price,
        category: product.category,
        img: product.img,
      })
    );
    if (token) {
      const newCart = { ...store.getState().cart };
      updateCart(newCart.cartItems);
    } else {
      localStorage.setItem('cartItems', JSON.stringify(store.getState().cart));
      dispatch(toggleCartMenu(true));
      setShowPreviewModal(false);
    }
  };
  // Open cart slide menu if successed add on backend
  useEffect(() => {
    if (addCartSuccess) {
      dispatch(toggleCartMenu(true));
      setShowPreviewModal(false);
    }
  }, [addCartSuccess, setShowPreviewModal, dispatch]);

  const handlerAddToWishList = () => {
    dispatch(
      wishListAddItem({
        pid: product.pid,
        name: product.name,
        price: product.price,
        img: product.img,
        category: product.category,
      })
    );
    if (token) {
      const newWishList = { ...store.getState().wishList };
      updateWishList(newWishList.wishList);
    } else {
      localStorage.setItem(
        'wishListItems',
        JSON.stringify(store.getState().wishList)
      );
    }
  };
  const handlerRemoveFromWishList = () => {
    dispatch(wishListRemoveItem(product.pid));
    if (token) {
      const newWishList = { ...store.getState().wishList };
      updateWishList(newWishList.wishList);
    } else {
      localStorage.setItem(
        'wishListItems',
        JSON.stringify(store.getState().wishList)
      );
    }
  };

  return (
    <div className={styles.previewModal} aria-modal>
      <div
        className={styles.previewModal_backdrop}
        onClick={() => {
          setShowPreviewModal(false);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            setShowPreviewModal(false);
          }
        }}
        tabIndex={0}
        role="button"
      />
      <div className={`${styles.previewModal_main} ${styles.show_modal}`}>
        <div className={styles.previewModal_main_close}>
          <RiCloseFill
            onClick={() => {
              setShowPreviewModal(false);
            }}
          />
        </div>
        <div className={styles.previewModal_main_img}>
          <img src={product.img[0]} alt={product.name} />
          <button
            onClick={() => {
              handelNavigation(product.pid, product.name);
            }}
            type="button"
          >
            Więcej
          </button>
        </div>
        <div className={styles.previewModal_main_product_info}>
          <h1 className={styles.previewModal_main_product_info_name}>
            {product?.name}
          </h1>
          <h2 className={styles.previewModal_main_product_info_price}>
            {product?.price?.toFixed(2)} zł
          </h2>
          <div className={styles.previewModal_main_product_info_buy}>
            {product && product?.amount > 0 ? (
              <>
                <div
                  className={styles.previewModal_main_product_info_buy_amount}
                >
                  <AiOutlineCheck />

                  <p> Dostępna ilość {product?.amount} szt.</p>
                </div>
                <div className={styles.previewModal_main_product_info_buy_cart}>
                  <button
                    className={
                      styles.previewModal_main_product_info_buy_cart_btn
                    }
                    onClick={() => {
                      if (productAmount > 1) {
                        setProductAmount(productAmount - 1);
                      }
                    }}
                    type="button"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    step="1"
                    autoComplete="off"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={productAmount}
                    onChange={(e) => {
                      setProductAmount(parseInt(e.target.value, 10));
                    }}
                  />
                  <button
                    className={
                      styles.previewModal_main_product_info_buy_cart_btn
                    }
                    onClick={() => {
                      if (productAmount < product.amount) {
                        setProductAmount(productAmount + 1);
                      }
                    }}
                    type="button"
                  >
                    +
                  </button>
                  <button
                    className={
                      styles.previewModal_main_product_info_buy_cart_btnAdd
                    }
                    onClick={handlerAddToCart}
                    type="button"
                  >
                    {addCartLoading ? (
                      <LoadingSpinnerOnButton />
                    ) : (
                      'Dodaj do koszyka'
                    )}
                  </button>
                </div>
              </>
            ) : (
              <p className={styles.previewModal_main_product_info_buy_lack}>
                Brak w magazynie
              </p>
            )}
            {!isAddToWishList && (
              <div
                className={styles.previewModal_main_product_info_buy_like}
                onClick={() => {
                  handlerAddToWishList();
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    handlerAddToWishList();
                  }
                }}
                tabIndex={0}
                role="button"
              >
                <BsHeart />
                <p>Dodaj do ulubionych</p>
              </div>
            )}

            {isAddToWishList && (
              <div
                className={styles.previewModal_main_product_info_buy_like_added}
                onClick={handlerRemoveFromWishList}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    handlerRemoveFromWishList();
                  }
                }}
                tabIndex={0}
                role="button"
              >
                <BsHeartFill />
                <p>Usuń z ulubionych</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PreviewModal = ({ setShowPreviewModal, product }: PropsType) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <PhotoFull
          setShowPreviewModal={setShowPreviewModal}
          product={product}
        />,
        document.getElementById('popup-root')!
      )}
    </div>
  );
};

export default PreviewModal;
