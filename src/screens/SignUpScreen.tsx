import { useState } from 'react';
import styles from './SignUpScreen.module.css';
import { useSignUpMutation } from '../app/slices/usersApiSlice';
import LoadingSpinnerOnButton from '../ui/LoadingSpinnerOnButton';

interface Errors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const SignUpScreen = () => {
  const [addNewUser, { isLoading }] = useSignUpMutation();
  const [toggleForm, setToggleFrom] = useState(false);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [signUpEmail, setLSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [confirmePassword, setConfirmePassword] = useState('');

  const [errors, setErrors] = useState<Errors>({});

  const validateSignUp = () => {
    const validationErrors: Errors = {};
    if (!signUpEmail) {
      validationErrors.email = 'Pole wymagane';
    } else if (!/\S+@\S+\.\S+/.test(signUpEmail)) {
      validationErrors.email = 'Nieprawidłowy adres e-mail';
    }
    if (!signUpPassword) {
      validationErrors.password = 'Pole wymagane';
    } else if (signUpPassword.length < 8 || !/\W/.test(signUpPassword)) {
      validationErrors.password =
        'Hasło musi mieć minimum 8 znaków, w tym jeden znak specjalny';
    }
    if (signUpPassword !== confirmePassword) {
      validationErrors.confirmPassword = 'Hasła muszą się zgadzać';
    }
    return validationErrors;
  };

  const handlerLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handlerSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateSignUp();
    if (Object.keys(validationErrors).length === 0) {
      const response = await addNewUser({
        email: signUpEmail,
        password: signUpPassword,
      });
      console.log(response);
      setLSignUpEmail('');
      setSignUpPassword('');
      setConfirmePassword('');
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className={styles.signUpScreen}>
      {toggleForm && (
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
            />
            <button type="button">Zaloguj się</button>
            <p className={styles.signUpScreen_form_restore}>
              Zapomniałeś hasła?
            </p>
          </form>
        </div>
      )}
      {!toggleForm && (
        <div className={styles.signUpScreen_form}>
          <h1>Rejestracja</h1>
          <form
            onSubmit={(e) => {
              handlerSignUp(e);
            }}
          >
            <label htmlFor="signup_email">
              Adres email: <span>*</span>
            </label>
            {errors.email === 'Nieprawidłowy adres e-mail' && (
              <p className={styles.error_message}>Nieprawidłowy adres e-mail</p>
            )}
            <input
              type="text"
              id="signup_email"
              value={signUpEmail}
              onChange={(e) => {
                setLSignUpEmail(e.target.value);
              }}
              className={errors.email ? styles.error_input : ''}
              placeholder={errors.email ? errors.email : ''}
            />
            <label htmlFor="signup_password">
              Hasło: <span>*</span>
            </label>
            {errors.password ===
              'Hasło musi mieć minimum 8 znaków, w tym jeden znak specjalny' && (
              <p className={styles.error_message}>
                Hasło musi mieć minimum 8 znaków, w tym znak specjalny
              </p>
            )}
            <input
              type="password"
              id="signup_password"
              value={signUpPassword}
              onChange={(e) => {
                setSignUpPassword(e.target.value);
              }}
              className={errors.password ? styles.error_input : ''}
              placeholder={errors.password ? errors.password : ''}
            />
            <label htmlFor="confirm_password">
              Powtórzone hasło: <span>*</span>
            </label>
            {errors.confirmPassword && (
              <p className={styles.error_message}>Hasła muszą się zgadzać</p>
            )}
            <input
              type="password"
              id="confirm_password"
              value={confirmePassword}
              onChange={(e) => {
                setConfirmePassword(e.target.value);
              }}
            />
            <p>
              Na adres e-mail zostanie wysłany odnośnik do ustawienia nowego
              hasła.
            </p>
            <p>
              Twoje dane osobowe zostaną użyte do obsługi twojej wizyty na
              naszej stronie, zarządzania dostępem do twojego konta i dla innych
              celów o których mówi nasza polityka prywatności.
            </p>
            <button type="submit">
              {isLoading ? <LoadingSpinnerOnButton /> : 'Zarejestruj się'}
            </button>
          </form>
        </div>
      )}
      <div className={styles.signUpScreen_toggleView}>
        <button
          onClick={() => {
            setToggleFrom(!toggleForm);
            window.scrollTo(0, 0);
          }}
          type="button"
        >
          {toggleForm ? 'Zarejestruj się' : 'Zaloguj się'}
        </button>
        <p>
          Witaj! Cieszymy się, że zdecydowałeś/aś się skorzystać z naszej
          platformy. Chcielibyśmy poinformować Cię, że utworzenie konta na
          naszej stronie pozwoli Ci mieć dostęp do historii swoich zakupów oraz
          pozwoli Ci szybciej i łatwiej dokonywać kolejnych transakcji.
          Zarejestruj się już teraz i skorzystaj z pełni funkcjonalności naszej
          platformy.
        </p>
      </div>
    </div>
  );
};

export default SignUpScreen;
