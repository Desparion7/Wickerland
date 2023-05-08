import { useState, useEffect } from 'react';
import { BsSearch, BsHeart, BsHeartFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductPreview.module.css';
import { addItem } from '../../app/slices/cartSlice';
import { toggleCartMenu } from '../../app/slices/slideMenuSlice';
import PreviewModal from './PreviewModal';
import { store } from '../../app/store';
import {
  whishList,
  whishListAddItem,
  whishListRemoveItem,
} from '../../app/slices/whishListSlice';
import { currentToken } from '../../app/slices/authSlice';
import { useUpdateUserCartMutation } from '../../app/slices/usersApiSlice';
import LoadingSpinnerOnButton from '../../ui/LoadingSpinnerOnButton';

interface PropsType {
  product: {
    pid: string;
    img: string[];
    category: string;
    name: string;
    amount: number;
    price: number;
  };
  // Render the same component in different gird view
  grid: number;
}

const ProductPreview = ({ product, grid }: PropsType) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(currentToken);
  const [isFocus, setIsFocus] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const wishListProducts = useSelector(whishList);
  const isAddToWishList = wishListProducts.find(
    (obj) => obj.pid === product.pid
  );

  const [updateCart, { isLoading: addCartLoading, isSuccess: addCartSuccess }] =
    useUpdateUserCartMutation();

  const handelNavigation = (id: string, category: string) => {
    navigation(`/produkt/${category}/${id}`);
  };

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
    }
  };
  // Open cart slide menu if successed add on backend
  useEffect(() => {
    if (addCartSuccess) {
      dispatch(toggleCartMenu(true));
    }
  }, [addCartSuccess, setShowPreviewModal, dispatch]);
  const handlerAddToWhishList = () => {
    dispatch(
      whishListAddItem({
        pid: product.pid,
        name: product.name,
        price: product.price,
        img: product.img,
      })
    );
    localStorage.setItem(
      'whishListItems',
      JSON.stringify(store.getState().whishList)
    );
  };

  const handlerRemoveFromWhishList = () => {
    dispatch(whishListRemoveItem(product.pid));
    localStorage.setItem(
      'whishListItems',
      JSON.stringify(store.getState().whishList)
    );
  };
  const price = product.price.toFixed(2);

  // Function to change styles if different grid
  const getPreviewClassName = () => {
    if (grid === 2) {
      return styles.productPreview;
    }
    if (grid === 3) return styles.productPreview3;
    return styles.productPreview4;
  };
  const getPreviewImgClassName = () => {
    if (grid === 2) {
      return styles.productPreview_img;
    }
    if (grid === 3) return styles.productPreview_img3;
    return styles.productPreview_img4;
  };

  return (
    <>
      {showPreviewModal && (
        <PreviewModal
          setShowPreviewModal={setShowPreviewModal}
          product={product}
        />
      )}
      <div
        // Change styles if different grid
        className={getPreviewClassName()}
        onMouseEnter={() => {
          setIsFocus(true);
        }}
        onMouseLeave={() => {
          setIsFocus(false);
        }}
      >
        <div
          // Change styles if different grid
          className={getPreviewImgClassName()}
        >
          <div
            onClick={() => {
              handelNavigation(product.pid, product.category);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handelNavigation(product.pid, product.category);
              }
            }}
            tabIndex={0}
            role="link"
          >
            {!isFocus && (
              <div>
                <img src={product.img[0]} alt={product.name} />
              </div>
            )}
          </div>
          {isFocus && (
            <div className={styles.productPreview_img_focus}>
              <div
                onClick={() => {
                  handelNavigation(product.pid, product.category);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    handelNavigation(product.pid, product.category);
                  }
                }}
                tabIndex={0}
                role="link"
              >
                <img
                  src={product.img[1]}
                  alt={product.name}
                  title={product.name}
                  className={styles.zoom}
                  loading="lazy"
                />
              </div>

              <div
                className={`${styles.productPreview_img_focus_options} ${styles.show_options}`}
              >
                <BsSearch
                  title="Szybki podgląd"
                  onClick={() => {
                    setShowPreviewModal(true);
                  }}
                />

                {!isAddToWishList && (
                  <div>
                    <BsHeart
                      title="Dodaj do ulubionych"
                      onClick={() => {
                        handlerAddToWhishList();
                      }}
                    />
                  </div>
                )}

                {isAddToWishList && (
                  <div
                    className={
                      styles.productPreview_img_focus_options_fillHeart
                    }
                  >
                    <BsHeartFill
                      title="Usuń z ulubionych"
                      onClick={() => {
                        handlerRemoveFromWhishList();
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className={styles.productPreview_info}>
          <div
            className={styles.productPreview_info_name}
            onClick={() => {
              handelNavigation(product.pid, product.name);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handelNavigation(product.pid, product.name);
              }
            }}
            tabIndex={0}
            role="link"
          >
            {product.name}
          </div>
          <div className={styles.productPreview_info_category}>
            {product.category}
            {isFocus ? (
              <div
                className={`${styles.productPreview_info_cart} ${styles.show_options}`}
              >
                {product.amount !== 0 ? (
                  <div
                    onClick={handlerAddToCart}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        handlerAddToCart();
                      }
                    }}
                    tabIndex={0}
                    role="button"
                  >
                    {addCartLoading ? (
                      <LoadingSpinnerOnButton />
                    ) : (
                      <p>Dodaj do koszyka</p>
                    )}
                  </div>
                ) : (
                  <span>Brak na magazynie</span>
                )}
              </div>
            ) : (
              <div className={styles.productPreview_info_price}>{price} zł</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPreview;
