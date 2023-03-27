import styles from './HeaderBottom.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import DesktopMenu from './DesktopMenu';


const HeaderBottom = () => {
	const isDesktop = useMediaQuery({ minWidth: '1000px' });
	const { pathname } = useLocation();

	return (
		<>
			{isDesktop && (
				<div className={styles.headerBottom}>
					<div className={styles.headerBottom_navigation}>
						<DesktopMenu />

						<Link to='/sklep'>
							<div
								className={`${styles.headerBottom_navigation_link} ${
									pathname.includes('/sklep') &&
									styles.headerBottom_navigation_link_active
								}`}
							>
								Sklep
							</div>
						</Link>
						<Link to='/blog'>
							<div
								className={`${styles.headerBottom_navigation_link} ${
									pathname.includes('/blog') &&
									styles.headerBottom_navigation_link_active
								}`}
							>
								Blog
							</div>
						</Link>
						<Link to='/onas'>
							<div
								className={`${styles.headerBottom_navigation_link} ${
									pathname.includes('/onas') &&
									styles.headerBottom_navigation_link_active
								}`}
							>
								O Nas
							</div>
						</Link>
						<Link to='/kontakt'>
							<div
								className={`${styles.headerBottom_navigation_link} ${
									pathname.includes('/kontakt') &&
									styles.headerBottom_navigation_link_active
								}`}
							>
								Kontakt
							</div>
						</Link>
					</div>
					<div className={styles.headerBottom_contact}>Tel. (15) 87 62 271</div>
				</div>
			)}
		</>
	);
};

export default HeaderBottom;
