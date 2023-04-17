import styles from './MobileNavigation.module.css';
import { BsShop } from 'react-icons/bs';
import { VscHeart } from 'react-icons/vsc';
import { GiBasket } from 'react-icons/gi';
import { RxPerson } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartItems } from '../../app/slices/cartSlice';
import { toggleCartMenu } from '../../app/slices/slideMenuSlice';
import { toggleLoginMenuView } from '../../app/slices/slideMenuSlice';

const MobileNavigation = () => {
	const dispatch = useDispatch();
	const cartProducts = useSelector(cartItems);

	return (
		<nav className={styles.mobileNavigation}>
			<Link to='/sklep' className={styles.mobileNavigation_iconBox}>
				<BsShop />
				<p>Sklep</p>
			</Link>
			<Link to='/ulubione' className={styles.mobileNavigation_iconBox}>
				<VscHeart />
				<span>0</span>
				<p>Ulubione </p>
			</Link>
			<div
				className={styles.mobileNavigation_iconBox}
				onClick={() => {
					dispatch(toggleCartMenu(true));
				}}
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
			>
				<RxPerson />
				<p>Moje Konto</p>
			</div>
		</nav>
	);
};

export default MobileNavigation;
