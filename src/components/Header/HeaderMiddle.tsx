import styles from './HeaderMiddle.module.css';
import { useState } from 'react';
import { BsSearch, BsHeart } from 'react-icons/bs';
import { GiBasket } from 'react-icons/gi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MobileMenu from './MobileMenu';
import Cart from '../Cart/Cart';
import LoginMenu from './LoginMenu';
import { cartMenuView } from '../../app/slices/slideMenuSlice';
import { toggleCartMenu } from '../../app/slices/slideMenuSlice';
import { toggleLoginMenuView } from '../../app/slices/slideMenuSlice';
import { loginMenuView } from '../../app/slices/slideMenuSlice';
import { cartItems } from '../../app/slices/cartSlice';

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
				<Link to='/'>
					<h2>Wicker</h2>
					<img src='/basket.PNG' />
					<h2>Land</h2>
				</Link>
			</div>
			{isDesktop && (
				<div className={styles.headerMiddle__search}>
					<input
						type='text'
						placeholder='Szukaj'
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
					>
						Logowanie/Rejestracja
					</div>
				)}
				<div className={styles.headerMiddle__options_icons}>
					<div className={styles.headerMiddle__options_icons_box}>
						<BsHeart />
						<span>0</span>
					</div>
					<div
						className={styles.headerMiddle__options_icons_box}
						onClick={() => {
							dispatch(toggleCartMenu(true));
						}}
					>
						<GiBasket />
						<span>{cartProducts.length}</span>
					</div>
					{isDesktop && (
						<p
							className={styles.headerMiddle__options_icons_price}
							onClick={() => {
								dispatch(toggleCartMenu(true));
							}}
						>
							{totalPrice.toFixed(2)} zł
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default HeaderMiddle;
