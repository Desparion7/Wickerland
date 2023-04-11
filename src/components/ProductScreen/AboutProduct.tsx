import styles from './AboutProduct.module.css';
import { useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../app/slices/cartSlice';
import { toggleCartMenu } from '../../app/slices/slideMenuSlice';

export interface ProductType {
	product: {
		pid: string;
		name: string;
		description: string;
		category: string;
		subcategory: string;
		amount: number;
		price: number;
		parameters: Record<string, unknown>[];
		img: string[];
	};
}

const AboutProduct = ({ product }: ProductType) => {
	const [productAmount, setProductAmount] = useState(1);
	const dispatch = useDispatch();

	const handlerAddToCart = () => {
		dispatch(
			addItem({
				pid: product.pid,
				qty: productAmount,
				price: product.price,
			})
		);
		dispatch(toggleCartMenu(true));
	};

	return (
		<div className={styles.aboutProduct_product_info}>
			<div className={styles.aboutProduct_product_info_path}>
				<Link to='/'>
					<p>Strona główna</p>
				</Link>
				<span>/</span>
				<Link to={`/sklep/${product?.category}`}>
					<p>{product?.category}</p>
				</Link>
				<span>/</span>
				<Link to={`/sklep/${product?.category}/${product?.subcategory}`}>
					<p>{product?.subcategory?.replace(/-/g, ' ')}</p>
				</Link>
			</div>
			<h1 className={styles.aboutProduct_product_info_name}>{product?.name}</h1>
			<h2 className={styles.aboutProduct_product_info_price}>
				{product?.price?.toFixed(2)} zł
			</h2>
			<div className={styles.aboutProduct_product_info_buy}>
				{product && product?.amount > 0 ? (
					<>
						<div className={styles.aboutProduct_product_info_buy_amount}>
							<AiOutlineCheck />

							<p> Dostępna ilość {product?.amount} szt.</p>
						</div>
						<div className={styles.aboutProduct_product_info_buy_cart}>
							<button
								className={styles.aboutProduct_product_info_buy_cart_btn}
								onClick={() => {
									if (productAmount > 0) {
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
								className={styles.aboutProduct_product_info_buy_cart_btn}
								onClick={() => {
									if (productAmount < product.amount) {
										setProductAmount(productAmount + 1);
									}
								}}
							>
								+
							</button>
							<button
								className={styles.aboutProduct_product_info_buy_cart_btnAdd}
								onClick={handlerAddToCart}
							>
								Dodaj do koszyka
							</button>
						</div>
					</>
				) : (
					<p className={styles.aboutProduct_product_info_buy_lack}>
						Brak w magazynie
					</p>
				)}
				<div className={styles.aboutProduct_product_info_buy_like}>
					<BsHeart />
					<p>Dodaj do ulubionych</p>
				</div>
				<div className={styles.aboutProduct_product_info_buy_others}>
					<p>
						ID: <span>{product?.pid}</span>
					</p>
					<p>
						Kategoria: <span>{product?.category}</span>{' '}
					</p>
					<p>Marka: WICKERLAND</p>
				</div>
			</div>
		</div>
	);
};

export default AboutProduct;
