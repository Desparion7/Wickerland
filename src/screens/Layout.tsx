import { Outlet, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import Header from '../components/Header/Header';
import MobileNavigation from '../components/MobileNavigation/MobileNavigation';
import Footer from '../components/Footer/Footer';

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
