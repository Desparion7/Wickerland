import styles from './Cart.module.css';
import { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import CartItemSmall from './CartItemSmall';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleCart } from '../../app/slices/shopViewSlice';

const cartProducts = [
	{
		id: '1',
		img: ['/products/pojemniki/pojemniki2-1.PNG'],
		name: 'Kufer wiklinowy skrzynia',
		amount: 10,
		price: 250,
	},
	{
		id: '2',
		img: ['/products/pojemniki/pojemniki1-1.PNG'],
		name: 'Kufer wiklinowy skrzynia',
		amount: 10,
		price: 250,
	},
	{
		id: '3',
		img: ['/products/pojemniki/pojemniki1-1.PNG'],
		name: 'Kufer wiklinowy skrzynia',
		amount: 10,
		price: 250,
	},
];

const Cart = () => {
	const [cartAnimation, setCartAnimation] = useState(styles.show_cart);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handlerHideMenu = () => {
		setTimeout(() => {
			dispatch(toggleCart(false));
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
							<CartItemSmall key={item.id} item={item} />
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
						<p className={styles.cart__main_bottom_total_price}>500 zł</p>
					</div>
					<button className={styles.cart__main_bottom_checkcart}>
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
