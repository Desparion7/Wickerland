import styles from './HeaderBottom.module.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import DesktopMenu from './DesktopMenu';

const HeaderBottom = () => {
	const isDesktop = useMediaQuery({ minWidth: '1000px' });

	return (
		<>
			{isDesktop && (
				<div className={styles.headerBottom}>
					<div className={styles.headerBottom_navigation}>
						<DesktopMenu />

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
