import styles from './FavoritesProduct.module.css';
import { Link } from 'react-router-dom';
import { WhishListProduct } from '../../app/slices/whishListSlice';
import { useDispatch } from 'react-redux';
import { whishListRemoveItem } from '../../app/slices/whishListSlice';

const FavoritesProduct = ({ product }: { product: WhishListProduct }) => {
	const dispatch = useDispatch();

	return (
		<>
			<div className={styles.favoritesProduct_product} key={product.pid}>
				<div className={styles.favoritesProduct_product_info}>
					<Link
						to={`/produkt/${product.category}/${product.pid}`}
						className={styles.favoritesProduct_product_info_img}
					>
						<img src={product.img[0]} alt={product.name} />
					</Link>
					<div className={styles.favoritesProduct_product_info_text}>
						<div className={styles.favoritesProduct_product_info__text_name}>
							{product.name}
						</div>
					</div>
				</div>
				<div className={styles.favoritesProduct_product_info_text_price}>
					Cena: <span>{product.price.toFixed(2)} zł</span>
				</div>
				<div className={styles.favoritesProduct_product_btn}>
					<button
						onClick={() => {
							dispatch(whishListRemoveItem(product.pid));
						}}
					>
						Usuń
					</button>
				</div>
			</div>
		</>
	);
};

export default FavoritesProduct;
