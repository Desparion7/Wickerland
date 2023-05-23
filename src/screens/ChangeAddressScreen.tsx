import styles from './ChangeAddressScreen.module.css';

const ChangeAddressScreen = () => {
  return (
    <div className={styles.changeAddressScreen}>
      <h1>Ustaw adres do wysyłki</h1>
      <div className={styles.changeAddressScreen_address}>
        <form>
          <label htmlFor="name">
            Imię<span>*</span>
          </label>
          <input type="text" id="name" />

          <label htmlFor="surname">
            Nazwisko<span>*</span>
          </label>
          <input type="text" id="surname" />

          <label htmlFor="street">
            Ulica<span>*</span>
          </label>
          <input type="text" placeholder="nazwa ulicy, numer budynku/lokalu" />

          <label htmlFor="city">
            Miasto<span>*</span>
          </label>
          <input type="text" id="city" />

          <label htmlFor="postcode">
            Kod pocztowy<span>*</span>
          </label>
          <input type="text" pattern="[0-9\-]*" id="postcode" />

          <label htmlFor="phone">
            Telefon<span>*</span>
          </label>
          <input type="text" id="phone" />

          <label htmlFor="company">Dane firmy(opcjonalnie)</label>
          <input type="text" id="company" />

          <button type="submit">Zapisz adres</button>
        </form>
      </div>
    </div>
  );
};

export default ChangeAddressScreen;
