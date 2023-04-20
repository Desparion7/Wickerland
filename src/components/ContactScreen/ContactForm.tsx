import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.contactForm}>
      <h3>Masz Pytanie? Napisz do nas lub zadzwoń</h3>
      <h3>TEL: 723 930 427</h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label htmlFor="name">Imię i</label>{' '}
          <label htmlFor="surname">
            nazwisko <span>*</span>
          </label>
        </div>

        <div className={styles.contactForm_name}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Imię"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="Nazwisko"
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />

        <label htmlFor="phone">Telefon</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <label htmlFor="message">
          Twoja wiadomość <span>*</span>
        </label>
        <textarea
          cols={30}
          rows={10}
          id="message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
        />

        <p>
          <input
            type="checkbox"
            id="consent"
            name="consent"
            value="1"
            className=""
            required
          />{' '}
          <span>*</span>Wyrażam zgodę na przetwarzanie moich danych osobowych w
          celu udzielenia odpowiedzi na moje zapytanie zgodnie z polityką
          prywatności.
        </p>
        <div>
          <button type="button">Wyślij</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
