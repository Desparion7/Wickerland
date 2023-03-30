import styles from './ProductsView.module.css';
import ProductPreview from '../ProductPreview/ProductPreview';
import { products } from '../../db/products';
import { useSelector } from 'react-redux';
import { shopGrid } from '../../app/slices/shopViewSlice';

const ProductsView = () => {
	const grid = useSelector(shopGrid);

	return (
		<section className={styles.productsView}>
			{products.map((product) => (
				<ProductPreview product={product} grid={grid} key={product.pid} />
			))}
		</section>
	);
};

export default ProductsView;
