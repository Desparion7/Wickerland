import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './MobileMenu.module.css';
import { BsSearch } from 'react-icons/bs';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';
import { MdTableBar } from 'react-icons/md';
import { GiBasket } from 'react-icons/gi';
import { CgBox } from 'react-icons/cg';

interface PropsType {
	setIsMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ setIsMobileMenu }: PropsType) => {
	const navigate = useNavigate();
	const [initialPath, setInitialPath] = useState(window.location.pathname);
	const [isActive, setIsActive] = useState('left');
	const [menuAnimation, setMenuAnimation] = useState(styles.show_menu);
	const [isCategoryOpen, setIsCategoryOpen] = useState<string[]>([]);

	// use efekt to close mobile menu when click on link.
	useEffect(() => {
		if (window.location.pathname !== initialPath) {
			setIsMobileMenu(false);
		}
	}, [navigate, initialPath]);

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
							<Link to='/sklep/koszyki'>
								<GiBasket
									className={styles.mobileMenu__main_options_title_icon}
								/>
								Koszyki
							</Link>
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
							<Link
								to='/sklep/koszyki/koszyki-wielkanocne'
								className={styles.mobileMenu__main_options_category}
							>
								Koszyki wielkanocne
							</Link>
							<Link
								to='/sklep/koszyki/koszyki-na-kwiaty-owoce-grzyby'
								className={styles.mobileMenu__main_options_category}
							>
								Koszyki na kwiaty, owoce, grzyby
							</Link>
							<Link
								to='/sklep/koszyki/koszyki-piknikowe'
								className={styles.mobileMenu__main_options_category}
							>
								Koszyki piknikowe
							</Link>
							<Link
								to='/sklep/koszyki/koszyki-na-pranie-zabawki'
								className={styles.mobileMenu__main_options_category}
							>
								Kosze na pranie, zabawki
							</Link>
							<Link
								to='/sklep/koszyki/koszyki-na-rower'
								className={styles.mobileMenu__main_options_category}
							>
								Koszyki na rower
							</Link>
							<Link
								to='/sklep/koszyki/koszyki-na-drewno'
								className={styles.mobileMenu__main_options_category}
							>
								Koszyki na drewno
							</Link>
						</div>
						<div className={styles.mobileMenu__main_options_title}>
							<Link to='/sklep/meble'>
								<MdTableBar
									className={styles.mobileMenu__main_options_title_icon}
								/>
								Meble
							</Link>
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
							<Link
								to='/sklep/meble/ławki-wiklinowe'
								className={styles.mobileMenu__main_options_category}
							>
								Ławki wiklinowe
							</Link>
							<Link
								to='/sklep/meble/fotele-bujaki-krzesła'
								className={styles.mobileMenu__main_options_category}
							>
								Fotele, bujaki, krzesła
							</Link>
							<Link
								to='/sklep/meble/półki'
								className={styles.mobileMenu__main_options_category}
							>
								Półki
							</Link>
							<Link
								to='/sklep/meble/szafki'
								className={styles.mobileMenu__main_options_category}
							>
								Szafki
							</Link>
							<Link
								to='/sklep/meble/stoły-stoliki'
								className={styles.mobileMenu__main_options_category}
							>
								Stoły, stoliki
							</Link>
						</div>
						<div className={styles.mobileMenu__main_options_title}>
							<Link to='/sklep/pojemniki'>
								<CgBox className={styles.mobileMenu__main_options_title_icon} />
								Pojemniki
							</Link>
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
							<Link
								to='/sklep/pojemniki/kufry-skrzynie'
								className={styles.mobileMenu__main_options_category}
							>
								Kufry, skrzynie
							</Link>
							<Link
								to='/sklep/pojemniki/kufry-skrzynie-z-oparciem'
								className={styles.mobileMenu__main_options_category}
							>
								Kufry, skrzynie z oparciem
							</Link>
							<Link
								to='/sklep/pojemniki/skrzynie-reagałowe'
								className={styles.mobileMenu__main_options_category}
							>
								Skrzynie regałowe
							</Link>
						</div>
						<div className={styles.mobileMenu__main_options_title}>
							<Link to='/sklep/pozostałe'>Pozostałe</Link>
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
							<Link
								to='/sklep/pozostałe/kwietniki-donice'
								className={styles.mobileMenu__main_options_category}
							>
								Kwietniki, donice
							</Link>
							<Link
								to='/sklep/pozostałe/transportety-dla-zwierząt'
								className={styles.mobileMenu__main_options_category}
							>
								Transportery dla zwierząt
							</Link>
							<Link
								to='/sklep/pozostałe/lampiony'
								className={styles.mobileMenu__main_options_category}
							>
								Lampiony
							</Link>
							<Link
								to='/sklep/pozostałe/wózki'
								className={styles.mobileMenu__main_options_category}
							>
								Wózki
							</Link>
						</div>
					</div>
				)}
				{isActive === 'right' && (
					<div className={styles.mobileMenu__main_options}>
						<div className={styles.mobileMenu__main_options_title}>
							<Link to='/sklep'>Sklep</Link>
						</div>
						<div className={styles.mobileMenu__main_options_title}>
							<Link to='/onas'>O Nas</Link>
						</div>
						<div className={styles.mobileMenu__main_options_title}>
							<Link to='/kontakt'>Kontakt</Link>
						</div>
						<div className={styles.mobileMenu__main_options_title}>
							<Link to='/logowanie'>Logowanie/Rejstracja</Link>
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
