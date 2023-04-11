import styles from './CartItemSmall.module.css';
import { useNavigate } from 'react-router-dom';
import { products } from '../../db/products';
import { removeItem } from '../../app/slices/cartSlice';
import { useDispatch } from 'react-redux';

interface propsType {
	item: {
		pid: string;
		qty: number;
		price: number;
	};
	handlerHideMenu: () => void;
}

const CartItemSmall = ({ item, handlerHideMenu }: propsType) => {
	const navigation = useNavigate();
	const dispatch = useDispatch();

	const product = products.find((obj) => obj.pid === item.pid);

	const handelNavigation = (id: string, category: string) => {
		navigation(`/produkt/${category}/${id}`);
		handlerHideMenu();
	};

	return (
		<div className={styles.cartItemSmall}>
			<img
				src={product?.img[0]}
				alt={product?.name}
				onClick={() => {
					if (product) {
						handelNavigation(product?.pid, product?.category);
					}
				}}
			/>
			<div className={styles.cartItemSmall__info}>
				<p
					className={styles.cartItemSmall__info_name}
					onClick={() => {
						if (product) {
							handelNavigation(product?.pid, product?.category);
						}
					}}
				>
					{product && product?.name.length > 30
						? product?.name.slice(0, 30) + '...'
						: product?.name}
				</p>
				<div className={styles.cartItemSmall__info_box}>
					<p className={styles.cartItemSmall__info_box_amount}>{item.qty} x</p>
					<p className={styles.cartItemSmall__info_box_price}>
						{product?.price.toFixed(2)} zł
					</p>
				</div>
			</div>
			<button
				onClick={() => {
					dispatch(removeItem(product?.pid));
				}}
			>
				x
			</button>
		</div>
	);
};

export default CartItemSmall;
