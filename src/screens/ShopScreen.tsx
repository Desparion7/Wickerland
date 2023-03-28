import styles from './ShopScreen.module.css';
import PriceFilter from '../components/Shop/PriceFilter';
import ShopNavigation from '../components/Shop/ShopNavigation';
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
					<ShopNavigation />
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
