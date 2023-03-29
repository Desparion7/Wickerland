import styles from './ShopScreen.module.css';
import PriceFilter from '../components/Shop/PriceFilter';
import ShopCategoryNavigation from '../components/Shop/ShopCategoryNavigation';
import ShopTools from '../components/Shop/ShopTools';
import ProductsView from '../components/Shop/ProductsView';
import { useMediaQuery } from 'react-responsive';

const ShopScreen = () => {
	const isDesktop = useMediaQuery({ minWidth: '1000px' });
	return (
		<section className={styles.shopScreen}>
			{isDesktop && (
				<div className={styles.shopScreen_boxLeft}>
					<PriceFilter />
					<ShopCategoryNavigation />
				</div>
			)}
			<div className={styles.shopScreen_boxRight}>
				<ShopTools />
				<ProductsView />
			</div>
		</section>
	);
};

export default ShopScreen;
