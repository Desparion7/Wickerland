import styles from './ProductsView.module.css';
import ProductPreview from '../ProductPreview/ProductPreview';
import { products } from '../../db/products';

const ProductsView = () => {
	return (
		<section className={styles.productsView}>
			{products.map((product) => (
				<ProductPreview product={product} grid={4} key={product.pid} />
			))}
		</section>
	);
};

export default ProductsView;
