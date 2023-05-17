import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { RiCloseFill } from 'react-icons/ri';
import styles from './LoginMenu.module.css';
import { toggleLoginMenuView } from '../../app/slices/slideMenuSlice';
import {
  useLoginMutation,
  useSendLogoutMutation,
} from '../../app/slices/authApiSlice';
import { setCredentials } from '../../app/slices/authSlice';
import LoadingSpinnerOnButton from '../../ui/LoadingSpinnerOnButton';
import useAuthToken from '../../hooks/useAuthToken';

interface Errors {
  email?: string;
  password?: string;
}

const LoginMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email } = useAuthToken();
  const [cartAnimation, setCartAnimation] = useState(styles.show_loginMenu);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [login, { isLoading, isError }] = useLoginMutation();
  const [logout, { isLoading: logoutLoading }] = useSendLogoutMutation();

  const [errors, setErrors] = useState<Errors>({});
  const [responseError, setResponseError] = useState('');

  // function to validate
  const validateLogin = () => {
    const validationErrors: Errors = {};
    if (!loginEmail) {
      validationErrors.email = 'Pole wymagane';
    }
    if (!loginPassword) {
      validationErrors.password = 'Pole wymagane';
    }
    return validationErrors;
  };
  // function to toggle login menu
  const handlerHideMenu = () => {
    setTimeout(() => {
      dispatch(toggleLoginMenuView(false));
    }, 150);
    setCartAnimation(styles.hide_loginMenu);
  };
  // function to login
  const handlerLogin = async () => {
    const validationErrors = validateLogin();
    setResponseError('');
    if (Object.keys(validationErrors).length === 0) {
      await login({
        email: loginEmail,
        password: loginPassword,
      })
        .unwrap()
        .then((payload) => {
          const { accessToken } = payload;
          dispatch(setCredentials({ accessToken }));
          if (accessToken) {
            navigate('/sklep');
          }
        })
        .catch((error) => setResponseError(error.data.message));

      setLoginEmail('');
      setLoginPassword('');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className={styles.loginMenu}>
      <div className={`${styles.loginMenu__main} ${cartAnimation}`}>
        <div className={styles.loginMenu__main_title}>
          <p>{email || 'Logowanie'} </p>
          <div
            className={styles.loginMenu__main_title_icon}
            onClick={handlerHideMenu}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handlerHideMenu();
              }
            }}
            role="button"
            tabIndex={0}
          >
            <RiCloseFill />
            <p>Zamknij</p>
          </div>
        </div>
        {email && (
          <div className={styles.loginMenu__main_logged}>
            <Link to="/zamówienia">Moje zamówienia</Link>
            <Link to="/ustawienia">Ustawienia konta</Link>
          </div>
        )}
        <form>
          {!email && (
            <>
              {' '}
              <label htmlFor="email">
                Nazwa użytkownika: <span>*</span>
              </label>
              <input
                type="text"
                id="email"
                value={loginEmail}
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
                className={errors.email ? styles.error_input : ''}
                placeholder={errors.email ? errors.email : ''}
              />
              <label htmlFor="password">
                Hasło: <span>*</span>
              </label>
              <input
                type="password"
                id="password"
                value={loginPassword}
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
                className={errors.email ? styles.error_input : ''}
                placeholder={errors.email ? errors.email : ''}
              />
              {responseError && (
                <div className={styles.error_message}>{responseError}</div>
              )}
              {isError && responseError === '' && (
                <div className={styles.error_message}>
                  Przepraszamy, ale wystąpił problem z połączeniem z serwerem
                </div>
              )}
            </>
          )}
          {email ? (
            <button type="button" onClick={logout}>
              {logoutLoading ? <LoadingSpinnerOnButton /> : ' Wyloguj się'}
            </button>
          ) : (
            <button type="button" onClick={handlerLogin}>
              {isLoading ? <LoadingSpinnerOnButton /> : ' Zaloguj się'}
            </button>
          )}
        </form>
        {!email && (
          <>
            <Link
              to="/odzyskanie"
              className={styles.loginMenu__main_link}
              onClick={() => {
                handlerHideMenu();
              }}
            >
              <p className={styles.loginMenu__main_restore}>
                Zapomniałeś hasła?
              </p>
            </Link>
            <div className={styles.loginMenu__main_sigupBox}>
              <p>Nie masz jeszcze konta ?</p>
              <button
                onClick={() => {
                  navigate('/rejestracja');
                  handlerHideMenu();
                }}
                type="button"
              >
                Zarejestruj się
              </button>
            </div>
          </>
        )}
      </div>
      <div
        className={`${styles.loginMenu__backdrop}`}
        onClick={handlerHideMenu}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handlerHideMenu();
          }
        }}
        role="link"
        tabIndex={0}
        aria-label="backdrop"
      />
    </div>
  );
};

export default LoginMenu;
