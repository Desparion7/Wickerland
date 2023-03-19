import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.css';
import { BsSearch } from 'react-icons/bs';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';
import { MdTableBar } from 'react-icons/md';
import { GiBasket } from 'react-icons/gi';
import { CgBox } from 'react-icons/cg';
import { RxPerson } from 'react-icons/rx';

interface PropsType {
	setIsMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ setIsMobileMenu }: PropsType) => {
	const [isActive, setIsActive] = useState('left');
	const [menuAnimation, setMenuAnimation] = useState(styles.show_menu);
	const [isCategoryOpen, setIsCategoryOpen] = useState<string[]>([]);

	const handlerHideMenu = () => {
		setTimeout(() => {
			setIsMobileMenu(false);
		}, 150);
		setMenuAnimation(styles.hide_menu);
	};

	const handlerCategory = (category: string) => {
		if (isCategoryOpen.includes(category)) {
			setIsCategoryOpen((prevState) =>
				prevState.filter((item) => item !== category)
			);
		} else {
			setIsCategoryOpen((prevState) => [...prevState, category]);
		}
	};

	return (
		<div className={styles.mobileMenu}>
			<div className={`${styles.mobileMenu__main} ${menuAnimation}`}>
				<div className={styles.mobileMenu__main_search}>
					<input type='text' placeholder='Szukaj' />
					<button>
						<BsSearch />
					</button>
				</div>
				<div className={styles.mobileMenu__main_modes}>
					<div
						className={`${styles.mobileMenu__main_mode} ${
							isActive === 'left' ? styles.active : ''
						}`}
						onClick={() => {
							setIsActive('left');
						}}
					>
						Produkty
					</div>
					<div
						className={`${styles.mobileMenu__main_mode} ${
							isActive === 'right' ? styles.active : ''
						}`}
						onClick={() => {
							setIsActive('right');
						}}
					>
						Konto
					</div>
					<span
						className={`${styles.mobileMenu__main_mode_underline} ${
							isActive === 'left' && styles.underline_left
						} ${isActive === 'right' && styles.underline_right}`}
					></span>
				</div>
				{isActive === 'left' && (
					<div className={styles.mobileMenu__main_options}>
						<div className={styles.mobileMenu__main_options_title}>
							<h3>
								<GiBasket
									className={styles.mobileMenu__main_options_title_icon}
								/>
								Koszyki
							</h3>
							<div
								className={`${styles.mobileMenu__main_options_title_arrow} ${
									isCategoryOpen.includes('koszyki') && styles.arrow_active
								}`}
								onClick={() => {
									handlerCategory('koszyki');
								}}
							>
								{isCategoryOpen.includes('koszyki') ? (
									<SlArrowUp />
								) : (
									<SlArrowDown />
								)}
							</div>
						</div>
						<div
							className={`${styles.mobileMenu__main_options_categories} ${
								isCategoryOpen.includes('koszyki') && styles.categories_active
							}`}
						>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Koszyki wielkanocne
							</Link>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Koszyki na kwiaty, owoce, grzyby
							</Link>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Koszyki piknikowe
							</Link>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Kosze na pranie, zabawki
							</Link>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Koszyki na rower
							</Link>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Koszyki na drewno
							</Link>
						</div>
						<div className={styles.mobileMenu__main_options_title}>
							<h3>
								<MdTableBar
									className={styles.mobileMenu__main_options_title_icon}
								/>
								Meble
							</h3>
							<div
								className={`${styles.mobileMenu__main_options_title_arrow} ${
									isCategoryOpen.includes('meble') && styles.arrow_active
								}`}
								onClick={() => {
									handlerCategory('meble');
								}}
							>
								{isCategoryOpen.includes('meble') ? (
									<SlArrowUp />
								) : (
									<SlArrowDown />
								)}
							</div>
						</div>
						<div
							className={`${styles.mobileMenu__main_options_categories} ${
								isCategoryOpen.includes('meble') && styles.categories_active
							}`}
						>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Ławki wiklinowe
							</Link>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Fotele, bujaki, krzesła
							</Link>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Pułki
							</Link>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Szafki
							</Link>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Stoły, stoliki
							</Link>
						</div>
						<div className={styles.mobileMenu__main_options_title}>
							<h3>
								<CgBox className={styles.mobileMenu__main_options_title_icon} />
								Pojemniki
							</h3>
							<div
								className={`${styles.mobileMenu__main_options_title_arrow} ${
									isCategoryOpen.includes('pojemniki') && styles.arrow_active
								}`}
								onClick={() => {
									handlerCategory('pojemniki');
								}}
							>
								{isCategoryOpen.includes('pojemniki') ? (
									<SlArrowUp />
								) : (
									<SlArrowDown />
								)}
							</div>
						</div>
						<div
							className={`${styles.mobileMenu__main_options_categories} ${
								isCategoryOpen.includes('pojemniki') && styles.categories_active
							}`}
						>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Kufry, skrzynie
							</Link>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Kufry, skrzynie z oparciem
							</Link>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Małe kosze na akcesoria
							</Link>
						</div>
						<div className={styles.mobileMenu__main_options_title}>
							<h3>Pozostałe</h3>
							<div
								className={`${styles.mobileMenu__main_options_title_arrow} ${
									isCategoryOpen.includes('pozostałe') && styles.arrow_active
								}`}
								onClick={() => {
									handlerCategory('pozostałe');
								}}
							>
								{isCategoryOpen.includes('pozostałe') ? (
									<SlArrowUp />
								) : (
									<SlArrowDown />
								)}
							</div>
						</div>
						<div
							className={`${styles.mobileMenu__main_options_categories} ${
								isCategoryOpen.includes('pozostałe') && styles.categories_active
							}`}
						>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Kwietniki, donice
							</Link>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Transportery dla zwierząt
							</Link>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Lampiony
							</Link>
							<Link to='/' className={styles.mobileMenu__main_options_category}>
								Wózki
							</Link>
						</div>
					</div>
				)}
				{isActive === 'right' && (
					<div className={styles.mobileMenu__main_options}>
						<div className={styles.mobileMenu__main_options_title}>
							<h3>Sklep</h3>
						</div>
						<div className={styles.mobileMenu__main_options_title}>
							<h3>O Nas</h3>
						</div>
						<div className={styles.mobileMenu__main_options_title}>
							<h3>Kontakt</h3>
						</div>
						<div className={styles.mobileMenu__main_options_title}>
							<h3>
								<RxPerson
									className={styles.mobileMenu__main_options_title_icon}
								/>
								Logowanie/Rejstracja
							</h3>
						</div>
					</div>
				)}
			</div>
			<div
				className={`${styles.mobileMenu__backdrop}`}
				onClick={handlerHideMenu}
			></div>
		</div>
	);
};

export default MobileMenu;
