import { Outlet, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import MobileNavigation from '../components/MobileNavigation/MobileNavigation';
import Footer from '../components/Footer/Footer';
import { useRefreshMutation } from '../app/slices/authApiSlice';
import { currentToken } from '../app/slices/authSlice';

const Layout = () => {
  const isDesktop = useMediaQuery({ minWidth: '1000px' });
  const effectRan = useRef(false);
  const location = useLocation();
  const token = useSelector(currentToken);

  const [refresh] = useRefreshMutation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
      const verifyRefreshToken = async () => {
        // console.log('verifying refresh token');
        try {
          await refresh();
        } catch (err) {
          // console.error(err);
        }
      };
      if (!token) verifyRefreshToken();
    }
    return () => {
      effectRan.current = true;
    };
    // eslint-disable-next-line
  }, []);

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
