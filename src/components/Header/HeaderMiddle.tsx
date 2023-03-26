import styles from './HeaderMiddle.module.css';
import { useState } from 'react';
import { BsSearch, BsHeart } from 'react-icons/bs';
import { GiBasket } from 'react-icons/gi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useMediaQuery } from 'react-responsive';
import MobileMenu from './MobileMenu';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

const HeaderMiddle = () => {
	const isDesktop = useMediaQuery({ minWidth: '1000px' });
	const [isMobileMenu, setIsMobileMenu] = useState(false);
	const [isCart, setIsCart] = useState(false);

	return (
		<div className={styles.headerMiddle}>
			{isCart && <Cart setIsCart={setIsCart} />}
			{!isDesktop && (
				<>
					<div className={styles.headerMiddle__burger}>
						<GiHamburgerMenu
							onClick={() => {
								setIsMobileMenu(true);
							}}
						/>
						<p>Menu</p>
					</div>
					{isMobileMenu && <MobileMenu setIsMobileMenu={setIsMobileMenu} />}
				</>
			)}
			<div className={styles.headerMiddle__logo}>
				<Link to='/'>
					<h2>Wicker</h2>
					<img src='./basket.PNG' />
					<h2>Land</h2>
				</Link>
			</div>
			{isDesktop && (
				<div className={styles.headerMiddle__search}>
					<input type='text' placeholder='Szukaj' />
					<button>
						<BsSearch />
					</button>
				</div>
			)}
			<div className={styles.headerMiddle__options}>
				{isDesktop && (
					<div className={styles.headerMiddle__options_access}>
						Logowanie/Rejestracja
					</div>
				)}
				<div className={styles.headerMiddle__options_icons}>
					<div className={styles.headerMiddle__options_icons_box}>
						<BsHeart />
						<span>0</span>
					</div>
					<div className={styles.headerMiddle__options_icons_box}>
						<GiBasket
							onClick={() => {
								setIsCart(true);
							}}
						/>
						<span>0</span>
					</div>
					{isDesktop && (
						<p
							className={styles.headerMiddle__options_icons_price}
							onClick={() => {
								setIsCart(true);
							}}
						>
							12,99 zł
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default HeaderMiddle;
