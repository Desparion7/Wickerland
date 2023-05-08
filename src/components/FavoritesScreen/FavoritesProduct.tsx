import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './FavoritesProduct.module.css';
import {
  WishListProduct,
  wishListRemoveItem,
} from '../../app/slices/wishListSlice';
import { useUpdateUserWishListMutation } from '../../app/slices/usersApiSlice';
import { currentToken } from '../../app/slices/authSlice';

import { store } from '../../app/store';

const FavoritesProduct = ({ product }: { product: WishListProduct }) => {
  const dispatch = useDispatch();
  const token = useSelector(currentToken);
  const [updateWishList] = useUpdateUserWishListMutation();
  return (
    <div className={styles.favoritesProduct_product} key={product.pid}>
      <div className={styles.favoritesProduct_product_info}>
        <Link
          to={`/produkt/${product.category}/${product.pid}`}
          className={styles.favoritesProduct_product_info_img}
        >
          <img src={product.img[0]} alt={product.name} />
        </Link>
        <div className={styles.favoritesProduct_product_info_text}>
          <div className={styles.favoritesProduct_product_info__text_name}>
            {product.name}
          </div>
        </div>
      </div>
      <div className={styles.favoritesProduct_product_info_text_price}>
        Cena: <span>{product.price.toFixed(2)} zł</span>
      </div>
      <div className={styles.favoritesProduct_product_btn}>
        <button
          onClick={() => {
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
          }}
          type="button"
        >
          Usuń
        </button>
      </div>
    </div>
  );
};

export default FavoritesProduct;
