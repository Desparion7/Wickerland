import styles from './CartScreen.module.css';
import CartScreenItem from '../components/Cart/CartScreenItem';
import { useSelector } from 'react-redux';
import { cartItems } from '../app/slices/cartSlice';

const CartScreen = () => {
	const cartProducts = useSelector(cartItems);

	return (
		<div className={styles.cartScreen}>
			<div className={styles.cartScreen_products}>
				<div className={styles.cartScreen_products_parameters}>
					<div className={styles.cartScreen_products_parameters_name}>
						Produkt
					</div>
					<div className={styles.cartScreen_products_parameters_price}>
						Cena
					</div>
					<div className={styles.cartScreen_products_parameters_amount}>
						Ilość
					</div>
					<div className={styles.cartScreen_products_parameters_totalPrice}>
						Kwota
					</div>
				</div>
				{cartProducts.map((item) => (
					<CartScreenItem item={item} />
				))}
			</div>
			<div className={styles.cartScreen_summary}>
				<h2>Podsumowanie koszyka</h2>
				<div>
					<p>Kwota</p>
				</div>
				<div>
					<p>Wysyłka</p>
				</div>
				<div>
					<p>Łącznie</p>
				</div>
				<button>Przejdz do płatności</button>
			</div>
		</div>
	);
};

export default CartScreen;
