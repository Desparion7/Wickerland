import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SignUp.Login.module.css';
import { useLoginMutation } from '../../app/slices/authApiSlice';
import { setCredentials } from '../../app/slices/authSlice';
import LoadingSpinnerOnButton from '../../ui/LoadingSpinnerOnButton';

interface Errors {
  email?: string;
  password?: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [login, { isLoading }] = useLoginMutation();

  const [errors, setErrors] = useState<Errors>({});

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

  // function to login
  const handlerLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateLogin();
    if (Object.keys(validationErrors).length === 0) {
      const { accessToken } = await login({
        email: loginEmail,
        password: loginPassword,
      }).unwrap();
      dispatch(setCredentials({ accessToken }));

      setLoginEmail('');
      setLoginPassword('');
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div className={styles.signUpScreen_form}>
      <h1>Logowanie</h1>
      <form onSubmit={handlerLogin}>
        <label htmlFor="login_email">
          Adres email: <span>*</span>
        </label>
        <input
          type="text"
          id="login_email"
          value={loginEmail}
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
          className={errors.email ? styles.error_input : ''}
          placeholder={errors.email ? errors.email : ''}
        />
        <label htmlFor="login_password">
          Hasło: <span>*</span>
        </label>
        <input
          type="password"
          id="login_password"
          value={loginPassword}
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
          className={errors.email ? styles.error_input : ''}
          placeholder={errors.email ? errors.email : ''}
        />
        <button type="submit">
          {isLoading ? <LoadingSpinnerOnButton /> : 'Zaloguj się'}
        </button>
        <p className={styles.signUpScreen_form_restore}>Zapomniałeś hasła?</p>
      </form>
    </div>
  );
};

export default Login;
