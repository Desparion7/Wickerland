import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './CartItemSmall.module.css';
import { removeItem, CartProduct } from '../../app/slices/cartSlice';
import { store } from '../../app/store';

interface PropsType {
  product: CartProduct;
  handlerHideMenu: () => void;
}
function CartItemSmall({ product, handlerHideMenu }: PropsType) {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handelNavigation = (id: string, category: string) => {
    navigation(`/produkt/${category}/${id}`);
    handlerHideMenu();
  };

  return (
    <div className={styles.cartItemSmall}>
      <div
        className={styles.cartItemSmall_img}
        onClick={() => {
          if (product) {
            handelNavigation(product?.pid, product?.category);
          }
        }}
        onKeyDown={() => {
          if (product) {
            handelNavigation(product?.pid, product?.category);
          }
        }}
        role="link"
        tabIndex={0}
      >
        <img src={product?.img[0]} alt={product?.name} />
      </div>
      <div className={styles.cartItemSmall__info}>
        <div
          onClick={() => {
            if (product) {
              handelNavigation(product?.pid, product?.category);
            }
          }}
          onKeyDown={() => {
            if (product) {
              handelNavigation(product?.pid, product?.category);
            }
          }}
          role="link"
          tabIndex={0}
        >
          <p className={styles.cartItemSmall__info_name}>
            {product && product?.name.length > 30
              ? `${product?.name.slice(0, 30)}...`
              : product?.name}
          </p>
        </div>

        <div className={styles.cartItemSmall__info_box}>
          <p className={styles.cartItemSmall__info_box_amount}>
            {product.qty} x
          </p>
          <p className={styles.cartItemSmall__info_box_price}>
            {product?.price.toFixed(2)} zł
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(removeItem(product?.pid));
          localStorage.setItem(
            'cartItems',
            JSON.stringify(store.getState().cart)
          );
        }}
        type="button"
      >
        x
      </button>
    </div>
  );
}

export default CartItemSmall;
