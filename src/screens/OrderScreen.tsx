import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './OrderScreen.module.css';
import { cartItems } from '../app/slices/cartSlice';

const OrderScreen = () => {
  const cartProducts = useSelector(cartItems);
  const formRef = useRef(null);

  const [statusError, setStatusError] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    'Kurier, Pocztex: 29,00 zł'
  );
  const [paymentMethod, setPaymentMethod] = useState('Przelew bankowy');
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };
  const totalPrice = cartProducts.reduce((acc, obiekt) => {
    return acc + obiekt.qty * obiekt.price;
  }, 0);

  let totalPriceWithDelivery: number;
  if (selectedValue === 'Kurier, Pocztex: 29,00 zł') {
    totalPriceWithDelivery = totalPrice + 29;
  } else {
    totalPriceWithDelivery = totalPrice + 39;
  }
  const handleChangePayment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handlerFormSumbit = () => {
    if (formRef.current) {
      // formRef.current.submit();
    }
  };

  return (
    <section className={styles.orderScreen}>
      <div className={styles.orderScreen_from}>
        <h2>Dane Płatności</h2>
        <form action="" ref={formRef}>
          <label htmlFor="name">
            Imię <span>*</span>
          </label>
          <input type="text" id="name" />
          <label htmlFor="surname">
            Nazwisko <span>*</span>
          </label>
          <input type="text" id="surname" />
          <label htmlFor="companyname">Nazwa firmy(opcjonalnie)</label>
          <input type="text" id="companyname" />
          <label htmlFor="street">
            Ulica <span>*</span>
          </label>
          <input
            type="text"
            id="street"
            placeholder="nazwa ulicy,numer budynku/numer lokalu"
          />
          <label htmlFor="postcode">
            Kod pocztowy <span>*</span>
          </label>
          <input type="number" id="postcode" />
          <label htmlFor="city">
            Miasto <span>*</span>
          </label>
          <input type="text" id="city" />
          <label htmlFor="phone">
            Numer telefonu <span>*</span>
          </label>
          <input type="number" id="phone" />
          <label htmlFor="email">
            Adres e-mail <span>*</span>
          </label>
          <input type="email" id="email" />
          <label htmlFor="comments">Uwagi do zamówienia(opcjonalnie)</label>
          <textarea
            name="comments"
            id="comments"
            placeholder="Uwagi do zamówienia, np. informacje o dostarczeniu przesyłki"
          />
        </form>
      </div>
      <div className={styles.orderScreen_order}>
        <h2>Twoje zamówienie</h2>
        <div className={styles.orderScreen_order_head}>
          <h3>Produkt</h3>
          <h3>Kwota</h3>
        </div>
        {cartProducts.map((product) => (
          <div className={styles.orderScreen_order_body} key={product.pid}>
            <p>
              {product.name} x {product.qty} szt.
            </p>
            <p>{(product.qty * product.price).toFixed(2)} zł</p>
          </div>
        ))}
        <div className={styles.orderScreen_order_delivery}>
          <h3>Wysyłka</h3>
          <div className={styles.orderScreen_order_delivery_method}>
            <div>
              <input
                id="Kurier, Pocztex: 29,00 zł"
                type="radio"
                name="Kurier, Pocztex: 29,00 zł"
                value="Kurier, Pocztex: 29,00 zł"
                checked={selectedValue === 'Kurier, Pocztex: 29,00 zł'}
                onChange={handleOptionChange}
              />
              <label htmlFor="Kurier, Pocztex: 29,00 zł">
                Kurier, Pocztex: 29,00 zł
              </label>
            </div>
            <div>
              <input
                id="Kurier pobranie, Pocztex 39,00 zł"
                type="radio"
                name="Kurier pobranie, Pocztex 39,00 zł"
                value="Kurier pobranie, Pocztex 39,00 zł"
                checked={selectedValue === 'Kurier pobranie, Pocztex 39,00 zł'}
                onChange={handleOptionChange}
              />
              <label htmlFor="Kurier pobranie, Pocztex 39,00 zł">
                Kurier pobranie, Pocztex: 39,00 zł
              </label>
            </div>
          </div>
        </div>
        <div className={styles.orderScreen_order_summary}>
          <h3>Łącznie</h3>
          <div className={styles.orderScreen_order_summary_price}>
            {totalPriceWithDelivery} zł
          </div>
        </div>
        <div className={styles.orderScreen_order_payment}>
          <h3>Metody płatności</h3>
          <div className={styles.orderScreen_order_payment_method}>
            <input
              id="Przelew bankowy"
              type="radio"
              name="Przelew bankowy"
              value="Przelew bankowy"
              checked={paymentMethod === 'Przelew bankowy'}
              onChange={handleChangePayment}
            />
            <label htmlFor="Przelew bankowy">Przelew bankowy</label>
          </div>
          <div className={styles.orderScreen_order_payment_method}>
            <input
              id="Proste i łatwe płatności"
              type="radio"
              name="Proste i łatwe płatności"
              value="Proste i łatwe płatności"
              checked={paymentMethod === 'Proste i łatwe płatności'}
              onChange={handleChangePayment}
            />
            <label htmlFor="Proste i łatwe płatności">
              Proste i łatwe płatności Przelwy24
            </label>
          </div>
          <p>
            Przy wyborze płatności przelewem bezpośrednim prosimy o wpłatę na
            nasze konto bankowe. Proszę użyć numeru zamówienia jako tytułu
            płatności. Twoje zamówienie zostanie zrealizowane po zaksięgowaniu
            wpłaty na naszym koncie.
          </p>
        </div>
        <div className={styles.orderScreen_order_statute}>
          <input type="checkbox" />
          <label>
            Przeczytałem/am i akceptuję <Link to="/regulamin">regulamin</Link>
            <span>*</span>
          </label>
        </div>
        {statusError && (
          <p className={styles.errorMessage}>
            Zakup wymaga akceptacji regulaminu
          </p>
        )}

        <button onClick={handlerFormSumbit} type="button">
          Kupuję i płacę
        </button>
      </div>
    </section>
  );
};

export default OrderScreen;
