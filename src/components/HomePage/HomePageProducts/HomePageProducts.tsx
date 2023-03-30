import { useState } from 'react';
import styles from './HomePageProducts.module.css';
import ProductPreview from '../../ProductPreview/ProductPreview';
import { homeBasket, homeChest, homeFurniture } from '../../../db/homePage';

const HomePageProducts = () => {
	const [activeProducts, setActiveProducts] = useState<string>('koszyki');

	return (
		<div className={styles.homepage_products}>
			<div className={styles.homepage_products_titles}>
				<h3
					className={`${activeProducts === 'koszyki' && styles.active}`}
					onClick={() => {
						setActiveProducts('koszyki');
					}}
				>
					Koszyki
				</h3>
				<h3
					className={`${activeProducts === 'pojemniki' && styles.active}`}
					onClick={() => {
						setActiveProducts('pojemniki');
					}}
				>
					Pojemniki
				</h3>
				<h3
					className={`${activeProducts === 'meble' && styles.active}`}
					onClick={() => {
						setActiveProducts('meble');
					}}
				>
					Meble
				</h3>
			</div>

			<div className={styles.homepage_products_box}>
				{activeProducts === 'koszyki' &&
					homeBasket.map((product) => (
						<ProductPreview key={product.pid} grid={4} product={product} />
					))}
				{activeProducts === 'meble' &&
					homeFurniture.map((product) => (
						<ProductPreview key={product.pid} grid={4} product={product} />
					))}
				{activeProducts === 'pojemniki' &&
					homeChest.map((product) => (
						<ProductPreview key={product.pid} grid={4} product={product} />
					))}
			</div>
		</div>
	);
};

export default HomePageProducts;
