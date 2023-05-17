import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header/Header';
import MobileNavigation from '../components/MobileNavigation/MobileNavigation';
import Footer from '../components/Footer/Footer';

const Layout = () => {
  const location = useLocation();
  const isDesktop = useMediaQuery({ minWidth: '1000px' });

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
