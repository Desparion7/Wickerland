import styles from './ProductPreview.module.css';

interface propsType {
	product: {
		id: string;
		img: string[];
		category: string;
		name: string;
		amount: number;
		price: number;
	};
}

const ProductPreview = ({ product }: propsType) => {
	const price = product.price.toFixed(2);
	return (
		<div className={styles.productPreview}>
			<div className={styles.productPreview_img}>
				<img src={product.img[0]} alt={product.name} />
			</div>
			<div className={styles.productPreview_info}>
				<div className={styles.productPreview_info_name}>{product.name}</div>
				<div className={styles.productPreview_info_category}>
					{product.category}
				</div>
				<div className={styles.productPreview_info_price}>{price} zł</div>
			</div>
		</div>
	);
};

export default ProductPreview;
