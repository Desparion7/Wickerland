import { useParams, Link } from 'react-router-dom';
import { useGetSingleOrderQuery } from '../app/slices/orderApiSlice';
import styles from './PaymentScreen.module.css';
import LoadingSpinner from '../ui/LoadingSpinner';

const PaymentScreen = () => {
  const params = useParams();
  const { id } = params;
  const { data, isSuccess, isLoading, isError } = useGetSingleOrderQuery({
    id,
  });

  return (
    <section className={styles.paymentScreen}>
      {isLoading && <LoadingSpinner />}
      {isError && (
        <div className={styles.error}>
          Coś poszło nie tak. Prosimy spróbować odświeżyć strone.
        </div>
      )}
      {data?.error && <div className={styles.error}>{data.error}</div>}
      {isSuccess && !data?.error && (
        <div>
          {data?.paid ? (
            <div>
              <h3>Zamówienie opłacone!</h3>
              <Link to="/sklep">Powrót do sklepu</Link>
            </div>
          ) : (
            <>
              <h2>Dziękujemy za dokonany zakup!</h2>
              <h3>
                Płatność można wykonać za pomocą przelewu tradycyjnego lub
                dostępnych metod.
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
                    Kwota: <span>{data?.price} zł</span>
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
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default PaymentScreen;
