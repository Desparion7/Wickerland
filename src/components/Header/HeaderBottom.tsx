import styles from './HeaderBottom.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const HeaderBottom = () => {
	const isDesktop = useMediaQuery({ minWidth: '1000px' });

	return (
		<>
			{isDesktop && (
				<div className={styles.headerBottom}>
					<div className={styles.headerBottom_navigation}>
						<div className={styles.headerBottom_navigation_menu}>
							<GiHamburgerMenu />
							Produkty
							<MdOutlineKeyboardArrowDown />
						</div>
						<Link to='/'>
							<div className={styles.headerBottom_navigation_link}>Sklep</div>
						</Link>
						<Link to='/'>
							<div className={styles.headerBottom_navigation_link}>Blog</div>
						</Link>
						<Link to='/'>
							<div className={styles.headerBottom_navigation_link}>O Nas</div>
						</Link>
						<Link to='/'>
							<div className={styles.headerBottom_navigation_link}>Kontakt</div>
						</Link>
					</div>
					<div className={styles.headerBottom_contact}>Tel. (15) 87 62 271</div>
				</div>
			)}
		</>
	);
};

export default HeaderBottom;
