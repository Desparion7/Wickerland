import styles from './ShopCategoryNavigation.module.css';
import { Link } from 'react-router-dom';

const ShopCategoryNavigation = () => {
	return (
		<section className={styles.shopCategoryNavigation}>
			<h3>Podkategorie</h3>
			<div className={styles.shopCategoryNavigation_category}>
				<h4 className={styles.shopCategoryNavigation_category_main}>
					<Link to='/sklep/koszyki'>Koszyki</Link>
				</h4>
				<Link to='/sklep/koszyki/koszyki-wielkanocne'>Koszyki wielkanocne</Link>
				<Link to='/sklep/koszyki/koszyki-na-kwiaty-owoce-grzyby'>
					Koszyki na kwiaty, owoce, grzyby
				</Link>
				<Link to='/sklep/koszyki/koszyki-piknikowe'>Koszyki piknikowe</Link>
				<Link to='/sklep/koszyki/koszyki-na-pranie-zabawki'>
					Kosze na pranie, zabawki
				</Link>
				<Link to='/sklep/koszyki/koszyki-na-rower'>Koszyki na rower</Link>
				<Link to='/sklep/koszyki/koszyki-na-drewno'>Koszyki na drewno</Link>
				<h4 className={styles.shopCategoryNavigation_category_main}>
					<Link to='/sklep/meble'>Meble</Link>
				</h4>
				<Link to='/sklep/meble/ławki-wiklinowe'>Ławki wiklinowe</Link>
				<Link to='/sklep/meble/fotele-bujaki-krzesła'>
					Fotele, bujaki, krzesła
				</Link>
				<Link to='/sklep/meble/półki'>Półki</Link>
				<Link to='/sklep/meble/szafki'>Szafki</Link>
				<Link to='/sklep/meble/stoły-stoliki'>Stoły, stoliki</Link>
				<h4 className={styles.shopCategoryNavigation_category_main}>
					<Link to='/sklep/pojemniki'>Pojemniki</Link>
				</h4>
				<Link to='/sklep/pojemniki/kufry-skrzynie'>Kufry, skrzynie</Link>
				<Link to='/sklep/pojemniki/kufry-skrzynie-z-oparciem'>
					Kufry, skrzynie z oparciem
				</Link>
				<Link to='/sklep/pojemniki/skrzynie-reagałowe'>Skrzynie regałowe</Link>
				<h4 className={styles.shopCategoryNavigation_category_main}>
					<Link to='/sklep/pozostałe'>Pozostałe</Link>
				</h4>
				<Link to='/sklep/pozostałe/kwietniki-donice'>Kwietniki, donice</Link>
				<Link to='/sklep/pozostałe/transportety-dla-zwierząt'>
					Transportery dla zwierząt
				</Link>
				<Link to='/sklep/pozostałe/lampiony'>Lampiony</Link>
				<Link to='/sklep/pozostałe/wózki'>Wózki</Link>
			</div>
		</section>
	);
};

export default ShopCategoryNavigation;
