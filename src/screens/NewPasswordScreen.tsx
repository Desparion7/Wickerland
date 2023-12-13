import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useCreateNewPasswordMutation } from '../app/slices/usersApiSlice';
import styles from './NewPasswordScreen.module.css';
import LoadingSpinner from '../ui/LoadingSpinner';

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

type Errors = {
  password?: string;
  confirmPassword?: string;
};

const NewPasswordScreen = () => {
  const location = useLocation();
  const token = location.hash.split('=')[1];
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  // response for set new password
  const [responseError, setResponseError] = useState('');
  const [responseData, setResponseData] = useState('');

  const [createNewPassword, { isLoading }] = useCreateNewPasswordMutation();

  // function to validate  form
  const validateForm = () => {
    const validationErrors: Errors = {};
    if (!password) {
      validationErrors.password = 'Pole wymagane';
    }
    if (!passwordRegex.test(password)) {
      validationErrors.password =
        'Hasło musi mieć minimum 8 znaków, w tym jeden znak specjalny';
    }
    if (!confirmPassword) {
      validationErrors.confirmPassword = 'Pole wymagane';
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Hasła muszą się zgadzać';
    }
    return validationErrors;
  };

  const handlePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      await createNewPassword({
        token,
        password,
      })
        .unwrap()
        .then((payload) => {
          if (payload.message) {
            setResponseData(payload?.message);
          }
        })
        .catch((error) => {
          if (error?.data?.message) {
            setResponseError(error.data.message);
          } else {
            setResponseError('Problem połączenia z serwerem');
          }
        });

      setPassword('');
      setConfirmPassword('');
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };
  let content;
  if (responseData) {
    content = (
      <>
        <h1>Hasło zostało zmienione!</h1>
        <p className="public_text">
          <Link to="/">Powrót do strony głównej</Link>
        </p>
      </>
    );
  } else if (isLoading) {
    content = <LoadingSpinner />;
  } else {
    content = (
      <div className={styles.newPasswordScreen_form}>
        <h1>Utwórz nowe hasło</h1>
        <p>Hasło wymaga 8 znaków w tym jednej cyfry i znaku specjalnego</p>
        <form onSubmit={handlePassword}>
          <label htmlFor="newPassword">Nowe hasło :</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors({});
            }}
            placeholder={errors.password ? errors.password : ''}
            className={errors.password && styles.error_input}
          />
          <label htmlFor="repeatNewPassword">Potwierdź hasło :</label>
          <input
            type="password"
            id="repeatNewPassword"
            name="repeatNewPassword"
            autoComplete="off"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrors({});
            }}
            placeholder={errors.confirmPassword ? errors.confirmPassword : ''}
            className={errors.confirmPassword && styles.error_input}
          />
          {errors.confirmPassword && (
            <p className={styles.error_message}>
              Wprowadzone hasła nie są zgodne
            </p>
          )}
          {errors.password && (
            <p className={styles.error_message}>Hasło nie spełnia wymagań</p>
          )}
          {responseError && (
            <p className={styles.error_message}>{responseError}</p>
          )}
          <button type="submit">Zatwierdz nowe hasło</button>
        </form>
      </div>
    );
  }
  return <div className={styles.newPasswordScreen}>{content}</div>;
};

export default NewPasswordScreen;
