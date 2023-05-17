import { Outlet } from 'react-router-dom';
import styles from './RequireAuth.module.css';
import useAuthToken from '../../hooks/useAuthToken';

const RequireAuth = () => {
  const { email } = useAuthToken();

  const content = email ? (
    <Outlet />
  ) : (
    <div className={styles.requireAuth}>
      Dostęp do danych na tej stronie tylko po zalogowaniu.
    </div>
  );

  return content;
};
export default RequireAuth;
