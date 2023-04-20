import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './AboutProduct.module.css';
import { addItem } from '../../app/slices/cartSlice';
import { toggleCartMenu } from '../../app/slices/slideMenuSlice';
import { store } from '../../app/store';
import {
  whishList,
  whishListAddItem,
  whishListRemoveItem,
} from '../../app/slices/whishListSlice';

export interface ProductType {
  product: {
    pid: string;
    name: string;
    description: string;
    category: string;
    subcategory: string;
    amount: number;
    price: number;
    parameters: Record<string, unknown>[];
    img: string[];
  };
}

const AboutProduct = ({ product }: ProductType) => {
  const dispatch = useDispatch();
  const [productAmount, setProductAmount] = useState(1);
  const wishListProducts = useSelector(whishList);
  const isAddToWishList = wishListProducts.find(
    (obj) => obj.pid === product.pid
  );

  const handlerAddToCart = () => {
    dispatch(
      addItem({
        pid: product.pid,
        name: product.name,
        qty: productAmount,
        amount: product.amount,
        price: product.price,
        category: product.category,
        img: product.img,
      })
    );
    dispatch(toggleCartMenu(true));
    localStorage.setItem('cartItems', JSON.stringify(store.getState().cart));
  };

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

  return (
    <div className={styles.aboutProduct_product_info}>
      <div className={styles.aboutProduct_product_info_path}>
        <Link to="/">
          <p>Strona główna</p>
        </Link>
        <span>/</span>
        <Link to={`/sklep/${product?.category}`}>
          <p>{product?.category}</p>
        </Link>
        <span>/</span>
        <Link to={`/sklep/${product?.category}/${product?.subcategory}`}>
          <p>{product?.subcategory?.replace(/-/g, ' ')}</p>
        </Link>
      </div>
      <h1 className={styles.aboutProduct_product_info_name}>{product?.name}</h1>
      <h2 className={styles.aboutProduct_product_info_price}>
        {product?.price?.toFixed(2)} zł
      </h2>
      <div className={styles.aboutProduct_product_info_buy}>
        {product && product?.amount > 0 ? (
          <>
            <div className={styles.aboutProduct_product_info_buy_amount}>
              <AiOutlineCheck />

              <p> Dostępna ilość {product?.amount} szt.</p>
            </div>
            <div className={styles.aboutProduct_product_info_buy_cart}>
              <button
                className={styles.aboutProduct_product_info_buy_cart_btn}
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
                className={styles.aboutProduct_product_info_buy_cart_btn}
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
                className={styles.aboutProduct_product_info_buy_cart_btnAdd}
                onClick={handlerAddToCart}
                type="button"
              >
                Dodaj do koszyka
              </button>
            </div>
          </>
        ) : (
          <p className={styles.aboutProduct_product_info_buy_lack}>
            Brak w magazynie
          </p>
        )}

        {!isAddToWishList && (
          <div
            className={styles.aboutProduct_product_info_buy_like}
            onClick={handlerAddToWhishList}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handlerAddToWhishList();
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
            className={styles.aboutProduct_product_info_buy_like_added}
            onClick={handlerRemoveFromWhishList}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handlerRemoveFromWhishList();
              }
            }}
            tabIndex={0}
            role="button"
          >
            <BsHeartFill />
            <p>Usuń z ulubionych</p>
          </div>
        )}

        <div className={styles.aboutProduct_product_info_buy_others}>
          <p>
            ID: <span>{product?.pid}</span>
          </p>
          <p>
            Kategoria: <span>{product?.category}</span>{' '}
          </p>
          <p>Marka: WICKERLAND</p>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
