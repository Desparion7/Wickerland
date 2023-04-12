import styles from './CartScreen.module.css';
import CartScreenItem from '../components/Cart/CartScreenItem';
import { useSelector } from 'react-redux';
import { cartItems } from '../app/slices/cartSlice';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const CartScreen = () => {
	const cartProducts = useSelector(cartItems);
	const [selectedValue, setSelectedValue] = useState(
		'Kurier, Pocztex: 29,00 zł'
	);
	const isDesktop = useMediaQuery({ minWidth: '1000px' });

	const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(e.target.value);
	};

	const totalPrice = cartProducts.reduce((acc, obiekt) => {
		return acc + obiekt.qty * obiekt.price;
	}, 0);
	let totalPriceWithDelivery;
	if (selectedValue === 'Kurier, Pocztex: 29,00 zł') {
		totalPriceWithDelivery = totalPrice + 29;
	} else {
		totalPriceWithDelivery = totalPrice + 39;
	}

	return (
		<div className={styles.cartScreen}>
			{cartProducts.length === 0 ? (
				<div className={styles.cartScreen_empty}>
					Twój koszyk jest aktualnie pusty!
				</div>
			) : (
				<>
					<div className={styles.cartScreen_products}>
						{isDesktop && (
							<div className={styles.cartScreen_products_parameters}>
								<div className={styles.cartScreen_products_parameters_name}>
									Produkty
								</div>
								<div className={styles.cartScreen_products_parameters_price}>
									Cena
								</div>
								<div className={styles.cartScreen_products_parameters_amount}>
									Ilość
								</div>
								<div
									className={styles.cartScreen_products_parameters_totalPrice}
								>
									Kwota
								</div>
							</div>
						)}
						{cartProducts.map((item) => (
							<CartScreenItem item={item} />
						))}
					</div>
					<div className={styles.cartScreen_summary}>
						<h2>Podsumowanie koszyka</h2>
						<div className={styles.cartScreen_summary_price}>
							<p className={styles.cartScreen_summary_price_text}>Kwota:</p>
							<p className={styles.cartScreen_summary_price_amount}>
								{totalPrice.toFixed(2)} zł
							</p>
						</div>
						<div className={styles.cartScreen_summary_delivery}>
							<p className={styles.cartScreen_summary_delivery_text}>
								Wysyłka:
							</p>
							<div className={styles.cartScreen_summary_delivery_method}>
								<div>
									<input
										id='Kurier, Pocztex: 29,00 zł'
										type='radio'
										name='Kurier, Pocztex: 29,00 zł'
										value='Kurier, Pocztex: 29,00 zł'
										checked={selectedValue === 'Kurier, Pocztex: 29,00 zł'}
										onChange={handleOptionChange}
									/>
									<label htmlFor='Kurier, Pocztex: 29,00 zł'>
										Kurier, Pocztex: 29,00 zł
									</label>
								</div>
								<div>
									<input
										id='Kurier pobranie, Pocztex 39,00 zł'
										type='radio'
										name='Kurier pobranie, Pocztex 39,00 zł'
										value='Kurier pobranie, Pocztex 39,00 zł'
										checked={
											selectedValue === 'Kurier pobranie, Pocztex 39,00 zł'
										}
										onChange={handleOptionChange}
									/>
									<label htmlFor='Kurier pobranie, Pocztex 39,00 zł'>
										Kurier pobranie, Pocztex: 39,00 zł
									</label>
								</div>
							</div>
						</div>
						<div className={styles.cartScreen_summary_totalPrice}>
							<p className={styles.cartScreen_summary_totalPrice_text}>
								Łącznie:
							</p>
							<p className={styles.cartScreen_summary_totalPrice_amount}>
								{totalPriceWithDelivery.toFixed(2)} zł
							</p>
						</div>
						<button>Przejdz do płatności</button>
					</div>
				</>
			)}
		</div>
	);
};

export default CartScreen;
