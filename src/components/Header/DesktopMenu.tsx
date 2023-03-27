import { useState, useEffect, useRef } from 'react';
import styles from './DesktopMenu.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

const DesktopMenu = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [subcategory, setSubcategory] = useState<string>('');
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseEnter = () => {
			setIsVisible(true);
		};

		const handleMouseLeave = () => {
			setIsVisible(false);
			setSubcategory('');
		};

		if (menuRef.current) {
			menuRef.current.addEventListener('mouseenter', handleMouseEnter);
			menuRef.current.addEventListener('mouseleave', handleMouseLeave);
		}

		return () => {
			if (menuRef.current) {
				menuRef.current.removeEventListener('mouseenter', handleMouseEnter);
				menuRef.current.removeEventListener('mouseleave', handleMouseLeave);
			}
		};
	}, []);

	return (
		<div className={styles.desktopMenu} ref={menuRef}>
			<div className={styles.desktopMenu_menu}>
				<GiHamburgerMenu />
				Produkty
				<MdOutlineKeyboardArrowDown />
			</div>
			{isVisible && (
				<div className={`${styles.desktopMenu_options} ${styles.show_options}`}>
					<div className={styles.desktopMenu_options_option}>
						<div
							className={styles.desktopMenu_options_option_category}
							onMouseEnter={() => {
								setSubcategory('koszyki');
							}}
						>
							<div>Koszyki</div>
							<MdOutlineKeyboardArrowRight />
						</div>
						{subcategory === 'koszyki' && (
							<div className={styles.desktopMenu_options_option_subcategory}>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Koszyki wielkanocne
								</Link>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Koszyki na kwiaty, owoce, grzyby
								</Link>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Koszyki piknikowe
								</Link>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Kosze na pranie, zabawki
								</Link>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Koszyki na rower
								</Link>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Koszyki na drewno
								</Link>
							</div>
						)}
					</div>
					<div className={styles.desktopMenu_options_option}>
						<div
							className={styles.desktopMenu_options_option_category}
							onMouseEnter={() => {
								setSubcategory('meble');
							}}
						>
							<div>Meble</div>
							<MdOutlineKeyboardArrowRight />
						</div>
						{subcategory === 'meble' && (
							<div className={styles.desktopMenu_options_option_subcategory}>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Ławki wiklinowe
								</Link>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Fotele, bujaki, krzesła
								</Link>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Półki
								</Link>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Szafki
								</Link>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Stoły, stoliki
								</Link>
							</div>
						)}
					</div>
					<div className={styles.desktopMenu_options_option}>
						<div
							className={styles.desktopMenu_options_option_category}
							onMouseEnter={() => {
								setSubcategory('pojemniki');
							}}
						>
							<div>Pojemniki</div>
							<MdOutlineKeyboardArrowRight />
						</div>
						{subcategory === 'pojemniki' && (
							<div className={styles.desktopMenu_options_option_subcategory}>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Kufry, skrzynie
								</Link>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Kufry, skrzynie z oparciem
								</Link>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Skrzynie regałowe
								</Link>
							</div>
						)}
					</div>
					<div className={styles.desktopMenu_options_option}>
						<div
							className={styles.desktopMenu_options_option_category}
							onMouseEnter={() => {
								setSubcategory('pozostałe');
							}}
						>
							<div>Pozostałe</div>
							<MdOutlineKeyboardArrowRight />
						</div>
						{subcategory === 'pozostałe' && (
							<div className={styles.desktopMenu_options_option_subcategory}>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Kwietniki, donice
								</Link>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Transportery dla zwierząt
								</Link>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Lampiony
								</Link>
								<Link
									to='/'
									className={
										styles.desktopMenu__options_option_subcategory_link
									}
								>
									Wózki
								</Link>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default DesktopMenu;
