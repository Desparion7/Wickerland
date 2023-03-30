import styles from './PriceFilterMobile.module.css';
import PriceFilter from './PriceFilter';
import { RiCloseFill } from 'react-icons/ri';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface PropsType {
	setIsFilterMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const PriceFilterMobile = ({ setIsFilterMenu }: PropsType) => {
	const [filterMenuAnimation, setFilterMenuAnimation] = useState(
		styles.show_menu
	);

	const handlerHideMenu = () => {
		setTimeout(() => {
			setIsFilterMenu(false);
		}, 150);
		setFilterMenuAnimation(styles.hide_menu);
	};

	return (
		<div className={styles.priceFilterMobile}>
			<div
				className={`${styles.priceFilterMobile__main} ${filterMenuAnimation}`}
			>
				<div
					className={styles.priceFilterMobile__main_close}
					onClick={handlerHideMenu}
				>
					<RiCloseFill />
					<span>Zamknij</span>
				</div>
				<PriceFilter />
				<div className={styles.priceFilterMobile__main_category}>
					<h3>Podkategorie</h3>
					<h4 className={styles.priceFilterMobile__main_category_main}>
						<Link to='/'>Koszyki</Link>
					</h4>
					<Link to='/'>Koszyki wielkanocne</Link>
					<Link to='/'>Koszyki na kwiaty, owoce, grzyby</Link>
					<Link to='/'>Koszyki piknikowe</Link>
					<Link to='/'>Kosze na pranie, zabawki</Link>
					<Link to='/'>Koszyki na rower</Link>
					<Link to='/'>Koszyki na drewno</Link>
					<Link to='/'>Ławki wiklinowe</Link>
					<h4 className={styles.priceFilterMobile__main_category_main}>
						<Link to='/'>Meble</Link>
					</h4>
					<Link to='/'>Ławki wiklinowe</Link>
					<Link to='/'>Fotele, bujaki, krzesła</Link>
					<Link to='/'>Półki</Link>
					<Link to='/'>Szafki</Link>
					<Link to='/'>Stoły, stoliki</Link>
					<h4 className={styles.priceFilterMobile__main_category_main}>
						<Link to='/'>Pojemniki</Link>
					</h4>
					<Link to='/'>Kufry, skrzynie</Link>
					<Link to='/'>Kufry, skrzynie z oparciem</Link>
					<Link to='/'>Skrzynie regałowe</Link>
					<h4 className={styles.priceFilterMobile__main_category_main}>
						<Link to='/'>Pozostałe</Link>
					</h4>
					<Link to='/'>Kwietniki, donice</Link>
					<Link to='/'>Transportery dla zwierząt</Link>
					<Link to='/'>Lampiony</Link>
					<Link to='/'>Wózki</Link>
				</div>
			</div>
			<div
				className={`${styles.priceFilterMobile__backdrop}`}
				onClick={handlerHideMenu}
			></div>
		</div>
	);
};

export default PriceFilterMobile;
