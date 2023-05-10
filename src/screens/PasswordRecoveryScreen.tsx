import { useState } from 'react';
import styles from './PasswordRecoveryScreen.module.css';

const PasswordRecoveryScreen = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const handlerRecovery = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === '') {
      setEmailError(true);
    }
  };

  return (
    <section className={styles.passwordRecovery}>
      <h1>Centrum odzyskiwania hasła</h1>
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
          }}
        />
        <button type="submit">Resetuj hasło</button>
      </form>
    </section>
  );
};

export default PasswordRecoveryScreen;
