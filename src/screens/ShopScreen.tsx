import styles from './ShopScreen.module.css';
import PriceFilter from '../components/ShopScreen/PriceFilter';
import ShopCategoryNavigation from '../components/ShopScreen/ShopCategoryNavigation';
import ShopTools from '../components/ShopScreen/ShopTools';
import ProductsView from '../components/ShopScreen/ProductsView';
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
