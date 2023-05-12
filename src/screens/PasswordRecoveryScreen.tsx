import { useState } from 'react';
import styles from './PasswordRecoveryScreen.module.css';
import { useResetPasswordMutation } from '../app/slices/usersApiSlice';
import LoadingSpinner from '../ui/LoadingSpinner';

const PasswordRecoveryScreen = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [responseData, setResponseData] = useState('');
  const [responseError, setResponseError] = useState('');

  const [resetPassword, { isLoading, isSuccess }] = useResetPasswordMutation();

  const handlerRecovery = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === '') {
      setEmailError(true);
    } else {
      await resetPassword({
        email,
      })
        .unwrap()
        .then((payload) => {
          if (payload.message) {
            setResponseData(payload.message);
            setResponseError('');
          }
        })
        .catch((error) => {
          if (error?.data?.message) {
            setResponseError(error.data.message);
          } else {
            setResponseError('Problem połączenia z serwerem');
          }
        });
    }
  };

  return (
    <section className={styles.passwordRecovery}>
      <h1>Centrum odzyskiwania hasła</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <form
          onSubmit={(e) => {
            handlerRecovery(e);
          }}
        >
          <p>
            Proszę wprowadzić adres e-mail. Wyślemy w wiadomości email, odnośnik
            potrzebny do utworzenia nowego hasła.
          </p>
          <label htmlFor="email_revocery">Email powiązany z kontem:</label>
          <input
            type="email"
            id="email_revocery"
            value={email}
            className={emailError ? styles.error_input : ''}
            placeholder={emailError ? 'Pole wymagane' : ''}
            onChange={(e) => {
              setEmail(e.target.value);
              setResponseError('');
            }}
          />
          {responseError && (
            <p className={styles.error_message}>{responseError}</p>
          )}
          <button type="submit">Resetuj hasło</button>
        </form>
      )}
      {isSuccess && <p className={styles.confirm_message}>{responseData}</p>}
    </section>
  );
};

export default PasswordRecoveryScreen;
