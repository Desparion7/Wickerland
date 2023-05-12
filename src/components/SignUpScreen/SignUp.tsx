import { useState } from 'react';
import styles from './SignUp.Login.module.css';
import LoadingSpinnerOnButton from '../../ui/LoadingSpinnerOnButton';
import { useSignUpMutation } from '../../app/slices/usersApiSlice';

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

interface Errors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const SignUp = () => {
  const [addNewUser, { isSuccess, isLoading }] = useSignUpMutation();

  const [signUpEmail, setLSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [confirmePassword, setConfirmePassword] = useState('');

  const [errors, setErrors] = useState<Errors>({});

  // response from signup
  const [responseData, setResponseData] = useState('');
  const [responseError, setResponseError] = useState('');

  // function to validate signup form
  const validateSignUp = () => {
    const validationErrors: Errors = {};
    if (!signUpEmail) {
      validationErrors.email = 'Pole wymagane';
    } else if (!/\S+@\S+\.\S+/.test(signUpEmail)) {
      validationErrors.email = 'Nieprawidłowy adres e-mail';
    }
    if (!signUpPassword) {
      validationErrors.password = 'Pole wymagane';
    } else if (!passwordRegex.test(signUpPassword)) {
      validationErrors.password =
        'Hasło musi mieć minimum 8 znaków, w tym jeden znak specjalny';
    }
    if (signUpPassword !== confirmePassword) {
      validationErrors.confirmPassword = 'Hasła muszą się zgadzać';
    }
    return validationErrors;
  };
  // function to signup new user
  const handlerSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateSignUp();
    if (Object.keys(validationErrors).length === 0) {
      await addNewUser({
        email: signUpEmail,
        password: signUpPassword,
      })
        .unwrap()
        .then((payload) => setResponseData(payload.email))
        .catch((error) => {
          if (error?.data?.message) {
            setResponseError(error.data.message);
          } else {
            setResponseError('Problem połączenia z serwerem');
          }
        });

      setLSignUpEmail('');
      setSignUpPassword('');
      setConfirmePassword('');
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div className={styles.signUpScreen_form}>
      {isSuccess ? (
        <div className={styles.signUpScreen_form_success}>
          Nowy użytkownik <span>{responseData}</span> został pomyśle dodany.
          Możesz przejść do logowania
        </div>
      ) : (
        <>
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
            {responseError && (
              <div className={styles.error_message}>{responseError}</div>
            )}
            <p>
              Twoje dane osobowe zostaną użyte do obsługi twojej wizyty na
              naszej stronie, zarządzania dostępem do twojego konta i dla innych
              celów o których mówi nasza polityka prywatności.
            </p>
            <button type="submit">
              {isLoading ? <LoadingSpinnerOnButton /> : 'Zarejestruj się'}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default SignUp;
