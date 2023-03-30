import styles from './ShopCategoryNavigation.module.css';
import { Link } from 'react-router-dom';

const ShopCategoryNavigation = () => {
	return (
		<section className={styles.shopCategoryNavigation}>
			<h3>Podkategorie</h3>
			<div className={styles.shopCategoryNavigation_category}>
				<h4 className={styles.shopCategoryNavigation_category_main}>
					<Link to='/'>Koszyki</Link>
				</h4>
				<Link to='/'>Koszyki wielkanocne</Link>
				<Link to='/'>Koszyki na kwiaty, owoce, grzyby</Link>
				<Link to='/'>Koszyki piknikowe</Link>
				<Link to='/'>Kosze na pranie, zabawki</Link>
				<Link to='/'>Koszyki na rower</Link>
				<Link to='/'>Koszyki na drewno</Link>
				<Link to='/'>Ławki wiklinowe</Link>
				<h4 className={styles.shopCategoryNavigation_category_main}>
					<Link to='/'>Meble</Link>
				</h4>
				<Link to='/'>Ławki wiklinowe</Link>
				<Link to='/'>Fotele, bujaki, krzesła</Link>
				<Link to='/'>Półki</Link>
				<Link to='/'>Szafki</Link>
				<Link to='/'>Stoły, stoliki</Link>
				<h4 className={styles.shopCategoryNavigation_category_main}>
					<Link to='/'>Pojemniki</Link>
				</h4>
				<Link to='/'>Kufry, skrzynie</Link>
				<Link to='/'>Kufry, skrzynie z oparciem</Link>
				<Link to='/'>Skrzynie regałowe</Link>
				<h4 className={styles.shopCategoryNavigation_category_main}>
					<Link to='/'>Pozostałe</Link>
				</h4>
				<Link to='/'>Kwietniki, donice</Link>
				<Link to='/'>Transportery dla zwierząt</Link>
				<Link to='/'>Lampiony</Link>
				<Link to='/'>Wózki</Link>
			</div>
		</section>
	);
};

export default ShopCategoryNavigation;
