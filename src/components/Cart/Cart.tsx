import styles from './Cart.module.css';
import { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import CartItemSmall from './CartItemSmall';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleCartMenu } from '../../app/slices/slideMenuSlice';
import { cartItems } from '../../app/slices/cartSlice';

const Cart = () => {
	const [cartAnimation, setCartAnimation] = useState(styles.show_cart);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const cartProducts = useSelector(cartItems);

	const totalPrice = cartProducts.reduce((acc, obiekt) => {
		return acc + obiekt.qty * obiekt.price;
	}, 0);

	const handlerHideMenu = () => {
		setTimeout(() => {
			dispatch(toggleCartMenu(false));
		}, 150);
		setCartAnimation(styles.hide_cart);
	};

	return (
		<div className={styles.cart}>
			<div className={`${styles.cart__main} ${cartAnimation}`}>
				<div className={styles.cart__main_title}>
					<p> Twój koszyk</p>
					<div
						className={styles.cart__main_title_icon}
						onClick={handlerHideMenu}
					>
						<RiCloseFill />
						<span>Zamknij</span>
					</div>
				</div>
				<div className={styles.cart__main_items}>
					{cartProducts.length > 0 ? (
						cartProducts.map((item) => (
							<CartItemSmall
								key={item.pid}
								item={item}
								handlerHideMenu={handlerHideMenu}
							/>
						))
					) : (
						<div className={styles.cart__main_items_empty}>
							<p>Brak produktów w koszyku</p>
							<button
								onClick={() => {
									navigate('/sklep');
									handlerHideMenu();
								}}
							>
								Powrót do sklepu
							</button>
						</div>
					)}
				</div>
				<div className={styles.cart__main_bottom}>
					<div className={styles.cart__main_bottom_total}>
						<p>Kwota:</p>
						<p className={styles.cart__main_bottom_total_price}>
							{totalPrice.toFixed(2)} zł
						</p>
					</div>
					<button
						className={styles.cart__main_bottom_checkcart}
						onClick={() => {
							navigate('/koszyk');
							handlerHideMenu();
						}}
					>
						Zobacz koszyk
					</button>
					<button className={styles.cart__main_bottom_order}>Zamówienie</button>
				</div>
			</div>
			<div
				className={`${styles.cart__backdrop}`}
				onClick={handlerHideMenu}
			></div>
		</div>
	);
};

export default Cart;
