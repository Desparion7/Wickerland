import { useState } from 'react';
import { BsSearch, BsHeart } from 'react-icons/bs';
import { GiBasket, GiHamburgerMenu } from 'react-icons/gi';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './HeaderMiddle.module.css';
import MobileMenu from './MobileMenu';
import Cart from '../Cart/Cart';
import LoginMenu from './LoginMenu';
import {
  cartMenuView,
  toggleCartMenu,
  toggleLoginMenuView,
  loginMenuView,
} from '../../app/slices/slideMenuSlice';
import { cartItems } from '../../app/slices/cartSlice';
import { whishList } from '../../app/slices/whishListSlice';

const HeaderMiddle = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const isDesktop = useMediaQuery({ minWidth: '1000px' });
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const isCart = useSelector(cartMenuView);
  const isLoginMenu = useSelector(loginMenuView);

  const cartProducts = useSelector(cartItems);
  const whishListProducts = useSelector(whishList);
  const totalPrice = cartProducts.reduce((acc, obiekt) => {
    return acc + obiekt.qty * obiekt.price;
  }, 0);

  const handlerSearch = () => {
    queryParams.set('szukaj', searchValue);

    const newSearch = queryParams.toString();

    navigate({
      pathname: location.pathname,
      search: newSearch,
    });
    setSearchValue('');
  };

  return (
    <div className={styles.headerMiddle}>
      {isCart && <Cart />}
      {isLoginMenu && <LoginMenu />}
      {!isDesktop && (
        <>
          <div className={styles.headerMiddle__burger}>
            <GiHamburgerMenu
              onClick={() => {
                setIsMobileMenu(true);
              }}
            />
            <p>Menu</p>
          </div>
          {isMobileMenu && <MobileMenu setIsMobileMenu={setIsMobileMenu} />}
        </>
      )}
      <div className={styles.headerMiddle__logo}>
        <Link to="/">
          <h2>Wicker</h2>
          <img src="/basket.PNG" alt="koszyk" />
          <h2>Land</h2>
        </Link>
      </div>
      {isDesktop && (
        <div className={styles.headerMiddle__search}>
          <input
            type="text"
            placeholder="Szukaj"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handlerSearch();
              }
            }}
          />
          <button
            onClick={() => {
              handlerSearch();
            }}
            type="button"
          >
            <BsSearch />
          </button>
        </div>
      )}
      <div className={styles.headerMiddle__options}>
        {isDesktop && (
          <div
            className={styles.headerMiddle__options_access}
            onClick={() => {
              dispatch(toggleLoginMenuView(true));
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                dispatch(toggleLoginMenuView(true));
              }
            }}
            role="button"
            tabIndex={0}
          >
            Logowanie/Rejestracja
          </div>
        )}
        <div className={styles.headerMiddle__options_icons}>
          <div className={styles.headerMiddle__options_icons_box}>
            <BsHeart
              onClick={() => {
                navigate('/ulubione');
              }}
            />
            <span>{whishListProducts.length}</span>
          </div>
          <div className={styles.headerMiddle__options_icons_box}>
            <GiBasket
              onClick={() => {
                dispatch(toggleCartMenu(true));
              }}
            />
            <span>{cartProducts.length}</span>
          </div>
          {isDesktop && (
            <div
              onClick={() => {
                dispatch(toggleCartMenu(true));
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  dispatch(toggleCartMenu(true));
                }
              }}
              role="button"
              tabIndex={0}
            >
              <p className={styles.headerMiddle__options_icons_price}>
                {totalPrice.toFixed(2)} zł
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
