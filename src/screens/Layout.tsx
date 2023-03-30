import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import MobileNavigation from '../components/MobileNavigation/MobileNavigation';
import { useMediaQuery } from 'react-responsive';

const Layout = () => {
	const isDesktop = useMediaQuery({ minWidth: '1000px' });
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
