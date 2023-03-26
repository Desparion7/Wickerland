import styles from './CartItemSmall.module.css';

interface propsType {
	item: {
		id: string;
		img: string[];
		name: string;
		amount: number;
		price: number;
	};
}

const CartItemSmall = ({ item }: propsType) => {
	return (
		<div className={styles.cartItemSmall}>
			<img src={item.img[0]} alt={item.name} />
			<div className={styles.cartItemSmall__info}>
				<p className={styles.cartItemSmall__info_name}>
					{item.name.length > 30 ? item.name.slice(0, 30) + '...' : item.name}
				</p>
				<div className={styles.cartItemSmall__info_box}>
					<p className={styles.cartItemSmall__info_box_amount}>
						{item.amount} x
					</p>
					<p className={styles.cartItemSmall__info_box_price}>
						{item.price} zł
					</p>
				</div>
			</div>
			<button>x</button>
		</div>
	);
};

export default CartItemSmall;
