import styles from './CartItemSmall.module.css';
import { useNavigate } from 'react-router-dom';
import { removeItem } from '../../app/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { store } from '../../app/store';
import { CartProduct } from '../../app/slices/cartSlice';

interface propsType {
	product: CartProduct;
	handlerHideMenu: () => void;
}
const CartItemSmall = ({ product, handlerHideMenu }: propsType) => {
	const navigation = useNavigate();
	const dispatch = useDispatch();

	const handelNavigation = (id: string, category: string) => {
		navigation(`/produkt/${category}/${id}`);
		handlerHideMenu();
	};

	return (
		<>
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
						<p className={styles.cartItemSmall__info_box_amount}>
							{product.qty} x
						</p>
						<p className={styles.cartItemSmall__info_box_price}>
							{product?.price.toFixed(2)} zł
						</p>
					</div>
				</div>
				<button
					onClick={() => {
						dispatch(removeItem(product?.pid));
						localStorage.setItem(
							'cartItems',
							JSON.stringify(store.getState().cart)
						);
					}}
				>
					x
				</button>
			</div>
		</>
	);
};

export default CartItemSmall;
