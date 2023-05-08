import { useSelector } from 'react-redux';
import styles from './FavoritesScreen.module.css';
import { wishList } from '../app/slices/wishListSlice';
import FavoritesProduct from '../components/FavoritesScreen/FavoritesProduct';

const FavoritesScreen = () => {
  const wishListProducts = useSelector(wishList);

  return (
    <div className={styles.favoritesScreen}>
      <h2>Twoje ulubione produkty</h2>
      {wishListProducts.length === 0 && (
        <div className={styles.favoritesScreen_empty}>
          Lista ulubionych produktów jest pusta!
        </div>
      )}
      <div className={styles.favoritesScreen_productsBox}>
        {wishListProducts.map((product) => (
          <FavoritesProduct product={product} key={product.pid} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesScreen;
