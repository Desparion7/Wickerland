import { useSelector } from 'react-redux';
import styles from './FavoritesScreen.module.css';
import { whishList } from '../app/slices/whishListSlice';
import FavoritesProduct from '../components/FavoritesScreen/FavoritesProduct';

const FavoritesScreen = () => {
  const whishListProducts = useSelector(whishList);

  return (
    <div className={styles.favoritesScreen}>
      <h2>Twoje ulubione produkty</h2>
      {whishListProducts.length === 0 && (
        <div className={styles.favoritesScreen_empty}>
          Lista ulubionych produktów jest pusta!
        </div>
      )}
      <div className={styles.favoritesScreen_productsBox}>
        {whishListProducts.map((product) => (
          <FavoritesProduct product={product} key={product.pid} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesScreen;
