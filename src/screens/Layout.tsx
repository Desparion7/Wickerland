import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MobileNavigation from '../components/MobileNavigation/MobileNavigation';
import { useMediaQuery } from 'react-responsive';

const Layout = () => {
	const isDesktop = useMediaQuery({ minWidth: '1000px' });
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
			{!isDesktop && <MobileNavigation />}
		</div>
	);
};

export default Layout;
