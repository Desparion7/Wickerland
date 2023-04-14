import styles from './ProductsView.module.css';
import ProductPreview from '../ProductPreview/ProductPreview';
import { useSelector } from 'react-redux';
import { shopGrid } from '../../app/slices/shopViewSlice';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../app/slices/productsApiSlice';
import Pagination from '../../ui/Pagination';

const ProductsView = () => {
	const grid = useSelector(shopGrid);
	const { size, pageNumber } = useParams();
	const { data, isError, isLoading } = useGetProductsQuery({
		pageSize: size,
		pageNumber,
	});

	return (
		<>
			<section className={styles.productsView}>
				{data?.products.map((product) => (
					<ProductPreview product={product} grid={grid} key={product.pid} />
				))}
			</section>
			<Pagination pages={data?.totalPages} />
		</>
	);
};

export default ProductsView;
