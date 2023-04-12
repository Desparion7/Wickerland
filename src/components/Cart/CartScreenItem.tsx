import styles from './CartScreenItem.module.css';
import { useState } from 'react';
import { CartProduct } from '../../app/slices/cartSlice';
import { products } from '../../db/products';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeItemQty, removeItem } from '../../app/slices/cartSlice';
import { RxCross2 } from 'react-icons/rx';
import { useMediaQuery } from 'react-responsive';

const CartScreenItem = ({ item }: { item: CartProduct }) => {
	const navigation = useNavigate();
	const dispatch = useDispatch();
	const isDesktop = useMediaQuery({ minWidth: '1000px' });

	const [productAmount, setProductAmount] = useState(item.qty);
	const product = products.find((obj) => obj.pid === item.pid);

	const handelNavigation = (id: string, category: string) => {
		navigation(`/produkt/${category}/${id}`);
	};
	return (
		<div className={styles.cartScreenItem}>
			<div className={styles.cartScreenItem_name}>
				{isDesktop && (
					<button
						onClick={() => {
							dispatch(removeItem(product?.pid));
						}}
					>
						<RxCross2 />
					</button>
				)}
				<img
					src={product?.img[0]}
					alt={product?.name}
					onClick={() => {
						if (product) {
							handelNavigation(product?.pid, product?.category);
						}
					}}
				/>
				<p
					onClick={() => {
						if (product) {
							handelNavigation(product?.pid, product?.category);
						}
					}}
				>
					{product?.name}
				</p>
				{!isDesktop && (
					<button
						onClick={() => {
							dispatch(removeItem(product?.pid));
						}}
					>
						<RxCross2 />
					</button>
				)}
			</div>
			{!isDesktop && (
				<div className={styles.mobileBox}>
					<div className={styles.cartScreenItem_name_price}>
						Cena: {product?.price.toFixed(2)} zł
					</div>
					<div className={styles.cartScreenItem_name_amount}>
						<button
							className={styles.cartScreenItem_name_amount_btn}
							onClick={() => {
								if (product && productAmount > 1) {
									dispatch(
										changeItemQty({ pid: product?.pid, qty: productAmount - 1 })
									);
									setProductAmount(productAmount - 1);
								}
							}}
						>
							-
						</button>
						<input
							type='number'
							step='1'
							autoComplete='off'
							inputMode='numeric'
							pattern='[0-9]*'
							value={productAmount}
							onChange={(e) => {
								setProductAmount(parseInt(e.target.value));
							}}
						/>
						<button
							className={styles.cartScreenItem_name_amount_btn}
							onClick={() => {
								if (product && productAmount < product?.amount) {
									dispatch(
										changeItemQty({ pid: product?.pid, qty: productAmount + 1 })
									);
									setProductAmount(productAmount + 1);
								}
							}}
						>
							+
						</button>
					</div>
					<div className={styles.cartScreenItem_name_totalPrice}>
						{product && (product?.price * item.qty).toFixed(2)} zł
					</div>
				</div>
			)}
			{isDesktop && (
				<>
					<div className={styles.cartScreenItem_name_price}>
						{product?.price.toFixed(2)} zł
					</div>
					<div className={styles.cartScreenItem_name_amount}>
						<button
							className={styles.cartScreenItem_name_amount_btn}
							onClick={() => {
								if (product && productAmount > 1) {
									dispatch(
										changeItemQty({ pid: product?.pid, qty: productAmount - 1 })
									);
									setProductAmount(productAmount - 1);
								}
							}}
						>
							-
						</button>
						<input
							type='number'
							step='1'
							autoComplete='off'
							inputMode='numeric'
							pattern='[0-9]*'
							value={productAmount}
							onChange={(e) => {
								setProductAmount(parseInt(e.target.value));
							}}
						/>
						<button
							className={styles.cartScreenItem_name_amount_btn}
							onClick={() => {
								if (product && productAmount < product?.amount) {
									dispatch(
										changeItemQty({ pid: product?.pid, qty: productAmount + 1 })
									);
									setProductAmount(productAmount + 1);
								}
							}}
						>
							+
						</button>
					</div>
					<div className={styles.cartScreenItem_name_totalPrice}>
						{product && (product?.price * item.qty).toFixed(2)} zł
					</div>
				</>
			)}
		</div>
	);
};

export default CartScreenItem;
