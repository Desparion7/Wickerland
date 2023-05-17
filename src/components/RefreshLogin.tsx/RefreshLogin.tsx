import { Outlet } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useRefreshMutation } from '../../app/slices/authApiSlice';
import { currentToken } from '../../app/slices/authSlice';
import LoadingSpinner from '../../ui/LoadingSpinner';

const RefreshLogin = () => {
  const effectRan = useRef(false);

  const token = useSelector(currentToken);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError }] =
    useRefreshMutation();

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
  let content;

  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (isError) {
    content = <Outlet />;
  } else if (isSuccess) {
    // console.log('success');
    content = <Outlet />;
  } else if (token && isUninitialized) {
    // console.log('token and uninit');
    content = <Outlet />;
  }
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{content}</>;
};

export default RefreshLogin;
