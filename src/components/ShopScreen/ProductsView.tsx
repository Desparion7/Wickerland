import styles from './ProductsView.module.css';
import ProductPreview from '../ProductPreview/ProductPreview';
import { useSelector } from 'react-redux';
import { shopGrid } from '../../app/slices/shopViewSlice';
import { useParams, useLocation } from 'react-router-dom';
import { useGetProductsQuery } from '../../app/slices/productsApiSlice';
import Pagination from '../../ui/Pagination';
import LoadingSpinner from '../../ui/LoadingSpinner';

const ProductsView = () => {
	const grid = useSelector(shopGrid);
	const { category, subcategory } = useParams();
	const { search } = useLocation();
	const queryParams = new URLSearchParams(search);
	const size = queryParams.get('nastronie');
	const pageNumber = queryParams.get('strona');
	const min = queryParams.get('min');
	const max = queryParams.get('max');
	const filter = queryParams.get('szukaj');

	const { data, isError, isLoading } = useGetProductsQuery({
		category,
		subcategory,
		pageSize: size || undefined,
		pageNumber: pageNumber || undefined,
		min: min || undefined,
		max: max || undefined,
		search: filter || undefined,
	});

	return (
		<>
			{isLoading && <LoadingSpinner />}
			{isError && (
				<div className={styles.productsView_error}>
					Niestety nie udało się pobrać produktów z serwera!
				</div>
			)}
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
