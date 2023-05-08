import { BsShop } from 'react-icons/bs';
import { VscHeart } from 'react-icons/vsc';
import { GiBasket } from 'react-icons/gi';
import { RxPerson } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './MobileNavigation.module.css';
import { cartItems } from '../../app/slices/cartSlice';
import { wishList } from '../../app/slices/wishListSlice';
import {
  toggleCartMenu,
  toggleLoginMenuView,
} from '../../app/slices/slideMenuSlice';

const MobileNavigation = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(cartItems);
  const wishListProducts = useSelector(wishList);

  return (
    <nav className={styles.mobileNavigation}>
      <Link to="/sklep" className={styles.mobileNavigation_iconBox}>
        <BsShop />
        <p>Sklep</p>
      </Link>
      <Link to="/ulubione" className={styles.mobileNavigation_iconBox}>
        <VscHeart />
        <span>{wishListProducts.length}</span>
        <p>Ulubione </p>
      </Link>
      <div
        className={styles.mobileNavigation_iconBox}
        onClick={() => {
          dispatch(toggleCartMenu(true));
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            dispatch(toggleCartMenu(true));
          }
        }}
        tabIndex={0}
        role="button"
      >
        <GiBasket />
        <span>{cartProducts.length}</span>
        <p>Koszyk</p>
      </div>
      <div
        className={styles.mobileNavigation_iconBox}
        onClick={() => {
          dispatch(toggleLoginMenuView(true));
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            dispatch(toggleLoginMenuView(true));
          }
        }}
        tabIndex={0}
        role="button"
      >
        <RxPerson />
        <p>Moje Konto</p>
      </div>
    </nav>
  );
};

export default MobileNavigation;
