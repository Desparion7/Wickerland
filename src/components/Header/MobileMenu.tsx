import { useState, useEffect, useRef } from 'react';
import styles from './MobileMenu.module.css';
import { BsSearch } from 'react-icons/bs';

interface PropsType {
	setIsMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ setIsMobileMenu }: PropsType) => {
	const [isActive, setIsActive] = useState('');
	const [menuAnimation, setMenuAnimation] = useState(styles.show_menu);

	const handlerHideMenu = () => {
		setTimeout(() => {
			setIsMobileMenu(false);
		}, 150);
		setMenuAnimation(styles.hide_menu);
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
				<div className={styles.mobileMenu__main_options}></div>
			</div>
			<div
				className={`${styles.mobileMenu__backdrop}`}
				onClick={handlerHideMenu}
			></div>
		</div>
	);
};

export default MobileMenu;
