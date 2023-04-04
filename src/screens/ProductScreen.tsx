import styles from './ProductScreen.module.css';
import { useState } from 'react';
import { products } from '../db/products';
import { useParams } from 'react-router-dom';
import ProductPhotoCarousel from '../components/ProductScreen/ProductPhotoCarousel';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AboutProduct from '../components/ProductScreen/AboutProduct';

const ProductScreen = () => {
	const param = useParams();
	const [productAmount, setProductAmount] = useState('1');
	const product = products.find((obj) => obj.pid === param.id);

	return (
		<div className={styles.productScreen}>
			<div className={styles.productScreen_product}>
				<ProductPhotoCarousel
					img={product?.img as string[]}
					alt={product?.name as string}
				/>
				<div className={styles.productScreen_product_info}>
					<div className={styles.productScreen_product_info_path}>
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
					<h1 className={styles.productScreen_product_info_name}>
						{product?.name}
					</h1>
					<h2 className={styles.productScreen_product_info_price}>
						{product?.price?.toFixed(2)} zł
					</h2>
					<div className={styles.productScreen_product_info_buy}>
						{product && product?.amount > 0 ? (
							<>
								<div className={styles.productScreen_product_info_buy_amount}>
									<AiOutlineCheck />

									<p> Dostępna ilość {product?.amount} szt.</p>
								</div>
								<div className={styles.productScreen_product_info_buy_cart}>
									<button
										className={styles.productScreen_product_info_buy_cart_btn}
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
											setProductAmount(e.target.value);
										}}
									/>
									<button
										className={styles.productScreen_product_info_buy_cart_btn}
									>
										+
									</button>
									<button
										className={
											styles.productScreen_product_info_buy_cart_btnAdd
										}
									>
										Dodaj do koszyka
									</button>
								</div>
							</>
						) : (
							<p className={styles.productScreen_product_info_buy_lack}>
								Brak w magazynie
							</p>
						)}
						<div className={styles.productScreen_product_info_buy_like}>
							<BsHeart />
							<p>Dodaj do ulubionych</p>
						</div>
						<div className={styles.productScreen_product_info_buy_others}>
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
			</div>
			<AboutProduct
				parameters={product?.parameters}
				description={product?.description}
			></AboutProduct>
		</div>
	);
};

export default ProductScreen;
