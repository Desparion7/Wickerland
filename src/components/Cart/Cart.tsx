import styles from './Cart.module.css';
import { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import CartItemSmall from './CartItemSmall';

interface propsType {
	setIsCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const cartProducts = [
	{
		id: '1',
		img: [
			'../public/products/kufer1.PNG',
			'../public/products/kufer1a.PNG',
			'../public/products/kufer1b.PNG',
			'../public/products/kufer1c.PNG',
			'../public/products/kufer1d.PNG',
		],
		name: 'Kufer wiklinowy skrzynia',
		amount: 10,
		price: 250,
	},
	{
		id: '2',
		img: [
			'../public/products/kufer1.PNG',
			'../public/products/kufer1a.PNG',
			'../public/products/kufer1b.PNG',
			'../public/products/kufer1c.PNG',
			'../public/products/kufer1d.PNG',
		],
		name: 'Kufer wiklinowy skrzynia',
		amount: 10,
		price: 250,
	},
	{
		id: '3',
		img: [
			'../public/products/kufer1.PNG',
			'../public/products/kufer1a.PNG',
			'../public/products/kufer1b.PNG',
			'../public/products/kufer1c.PNG',
			'../public/products/kufer1d.PNG',
		],
		name: 'Kufer wiklinowy skrzynia',
		amount: 10,
		price: 250,
	},
	{
		id: '4',
		img: [
			'../public/products/kufer1.PNG',
			'../public/products/kufer1a.PNG',
			'../public/products/kufer1b.PNG',
			'../public/products/kufer1c.PNG',
			'../public/products/kufer1d.PNG',
		],
		name: 'Kufer wiklinowy skrzynia',
		amount: 10,
		price: 250,
	},
	{
		id: '5',
		img: [
			'../public/products/kufer1.PNG',
			'../public/products/kufer1a.PNG',
			'../public/products/kufer1b.PNG',
			'../public/products/kufer1c.PNG',
			'../public/products/kufer1d.PNG',
		],
		name: 'Kufer wiklinowy skrzynia',
		amount: 10,
		price: 250,
	},
	{
		id: '6',
		img: [
			'../public/products/kufer1.PNG',
			'../public/products/kufer1a.PNG',
			'../public/products/kufer1b.PNG',
			'../public/products/kufer1c.PNG',
			'../public/products/kufer1d.PNG',
		],
		name: 'Kufer wiklinowy skrzynia',
		amount: 10,
		price: 250,
	},
	{
		id: '7',
		img: [
			'../public/products/kufer1.PNG',
			'../public/products/kufer1a.PNG',
			'../public/products/kufer1b.PNG',
			'../public/products/kufer1c.PNG',
			'../public/products/kufer1d.PNG',
		],
		name: 'Kufer wiklinowy skrzynia',
		amount: 10,
		price: 250,
	},
];

const Cart = ({ setIsCart }: propsType) => {
	const [cartAnimation, setCartAnimation] = useState(styles.show_cart);

	const handlerHideMenu = () => {
		setTimeout(() => {
			setIsCart(false);
		}, 150);
		setCartAnimation(styles.hide_cart);
	};

	return (
		<div className={styles.cart}>
			<div className={`${styles.cart__main} ${cartAnimation}`}>
				<div className={styles.cart__main_title}>
					<p> Twój koszyk</p>
					<RiCloseFill
						className={styles.cart__main_title_icon}
						onClick={handlerHideMenu}
					/>
				</div>
				<div className={styles.cart__main_items}>
					{cartProducts.map((item) => (
						<CartItemSmall key={item.id} item={item} />
					))}
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
