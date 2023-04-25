import { useParams } from 'react-router-dom';
import styles from './PaymentScreen.module.css';

const PaymentScreen = () => {
  const { id } = useParams();
  return (
    <section className={styles.paymentScreen}>
      <h2>Dziękujemy za dokonany zakup!</h2>
      <h3>
        Płatność można wykonać za pomocą przelewu tradycyjnego lub dostępnych
        metod.
      </h3>
      <div className={styles.paymentScreen_methods}>
        <div className={styles.paymentScreen_methods_transfer}>
          <h4>Przelew tradycyjny:</h4>
          <p>Dane odbiorcy: WickerLand</p>
          <p>Adres: 37-420 Rudnik nad Sanem, Ul. Żwirki i Wigury 32</p>
          <p>
            Na rachunek:
            <span> xx xxxx xxxx xxxx xxxxx xxxx xxxx</span>
          </p>
          <p>
            Tytuł przelewu:<span> {id}</span>{' '}
          </p>
          <p>
            Kwota: <span>384,00 zł</span>
          </p>
        </div>
        <div className={styles.paymentScreen_methods_other}>
          <div className={styles.paymentScreen_methods_other_box}>
            <div className={styles.paymentScreen_methods_other_logo}>
              <img src="/Payu.png" alt="Payu logo" />
            </div>
            <div className={styles.paymentScreen_methods_other_logo}>
              <img src="/Przelewy24.png" alt="Przelewy24 logo" />
            </div>
          </div>
          <div>Powyższe metody nie mają obecnie integracji.</div>
        </div>
      </div>
    </section>
  );
};

export default PaymentScreen;
