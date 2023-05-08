import { useMediaQuery } from 'react-responsive';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  changeItemQty,
  removeItem,
  CartProduct,
} from '../../app/slices/cartSlice';
import { store } from '../../app/store';
import styles from './CartScreenItem.module.css';
import { useUpdateUserCartMutation } from '../../app/slices/usersApiSlice';
import { currentToken } from '../../app/slices/authSlice';

const CartScreenItem = ({ product }: { product: CartProduct }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(currentToken);
  const isDesktop = useMediaQuery({ minWidth: '1000px' });

  const [productAmount, setProductAmount] = useState(product?.qty);
  const [updateCart] = useUpdateUserCartMutation();

  const handelNavigation = (id: string, category: string) => {
    navigation(`/produkt/${category}/${id}`);
  };
  return (
    <div className={styles.cartScreenItem}>
      <div className={styles.cartScreenItem_name}>
        {isDesktop && (
          <button
            onClick={() => {
              dispatch(removeItem(product?.pid));
              if (token) {
                const newCart = { ...store.getState().cart };
                updateCart(newCart.cartItems);
              } else {
                localStorage.setItem(
                  'cartItems',
                  JSON.stringify(store.getState().cart)
                );
              }
            }}
            type="button"
          >
            <RxCross2 />
          </button>
        )}
        <div
          className={styles.cartScreenItem_name_img}
          onClick={() => {
            if (product) {
              handelNavigation(product?.pid, product?.category);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              if (product) {
                handelNavigation(product?.pid, product?.category);
              }
            }
          }}
          role="button"
          tabIndex={0}
        >
          <img src={product?.img[0]} alt={product?.name} />
        </div>
        <div
          onClick={() => {
            if (product) {
              handelNavigation(product?.pid, product?.category);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              if (product) {
                handelNavigation(product?.pid, product?.category);
              }
            }
          }}
          role="button"
          tabIndex={0}
        >
          <p>{product?.name}</p>
        </div>

        {!isDesktop && (
          <button
            onClick={() => {
              dispatch(removeItem(product?.pid));
              if (token) {
                const newCart = { ...store.getState().cart };
                updateCart(newCart.cartItems);
              } else {
                localStorage.setItem(
                  'cartItems',
                  JSON.stringify(store.getState().cart)
                );
              }
            }}
            type="button"
          >
            <RxCross2 />
          </button>
        )}
      </div>
      {!isDesktop && (
        <div className={styles.mobileBox}>
          <div className={styles.cartScreenItem_name_price}>
            Cena: {product?.price.toFixed(2)} zł
          </div>
          <div className={styles.cartScreenItem_name_amount}>
            <button
              className={styles.cartScreenItem_name_amount_btn}
              onClick={() => {
                if (product && productAmount > 1) {
                  dispatch(
                    changeItemQty({
                      pid: product?.pid,
                      qty: productAmount - 1,
                    })
                  );
                  if (token) {
                    const newCart = { ...store.getState().cart };
                    updateCart(newCart.cartItems);
                  } else {
                    localStorage.setItem(
                      'cartItems',
                      JSON.stringify(store.getState().cart)
                    );
                  }
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
              className={styles.cartScreenItem_name_amount_btn}
              onClick={() => {
                if (product && productAmount < product?.amount) {
                  dispatch(
                    changeItemQty({
                      pid: product?.pid,
                      qty: productAmount + 1,
                    })
                  );
                  if (token) {
                    const newCart = { ...store.getState().cart };
                    updateCart(newCart.cartItems);
                  } else {
                    localStorage.setItem(
                      'cartItems',
                      JSON.stringify(store.getState().cart)
                    );
                  }
                  setProductAmount(productAmount + 1);
                }
              }}
              type="button"
            >
              +
            </button>
          </div>
          <div className={styles.cartScreenItem_name_totalPrice}>
            {product && ((product?.price ?? 0) * product.qty).toFixed(2)} zł
          </div>
        </div>
      )}
      {isDesktop && (
        <>
          <div className={styles.cartScreenItem_name_price}>
            {product?.price.toFixed(2)} zł
          </div>
          <div className={styles.cartScreenItem_name_amount}>
            <button
              className={styles.cartScreenItem_name_amount_btn}
              onClick={() => {
                if (product && productAmount > 1) {
                  dispatch(
                    changeItemQty({
                      pid: product?.pid,
                      qty: productAmount - 1,
                    })
                  );
                  if (token) {
                    const newCart = { ...store.getState().cart };
                    updateCart(newCart.cartItems);
                  } else {
                    localStorage.setItem(
                      'cartItems',
                      JSON.stringify(store.getState().cart)
                    );
                  }
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
              className={styles.cartScreenItem_name_amount_btn}
              onClick={() => {
                if (product && productAmount < product?.amount) {
                  dispatch(
                    changeItemQty({
                      pid: product?.pid,
                      qty: productAmount + 1,
                    })
                  );
                  if (token) {
                    const newCart = { ...store.getState().cart };
                    updateCart(newCart.cartItems);
                  } else {
                    localStorage.setItem(
                      'cartItems',
                      JSON.stringify(store.getState().cart)
                    );
                  }
                  setProductAmount(productAmount + 1);
                }
              }}
              type="button"
            >
              +
            </button>
          </div>
          <div className={styles.cartScreenItem_name_totalPrice}>
            {product && ((product?.price ?? 0) * product.qty).toFixed(2)} zł
          </div>
        </>
      )}
    </div>
  );
};

export default CartScreenItem;
