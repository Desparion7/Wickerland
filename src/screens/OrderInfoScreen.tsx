import { useParams } from 'react-router-dom';
import styles from './OrderInfoScreen.module.css';
import { useGetSingleOrderQuery } from '../app/slices/orderApiSlice';
import LoadingSpinner from '../ui/LoadingSpinner';

const OrderInfoScreen = () => {
  const params = useParams();
  const id = params?.id;

  const { data, isLoading, isSuccess, isError } = useGetSingleOrderQuery({
    id,
  });
  const dateTimeString = data?.date.toString();

  const dateTime = {
    date: dateTimeString?.slice(0, 10),
    time: dateTimeString?.slice(11, 16),
  };
  let content;

  if (isLoading) {
    content = <LoadingSpinner />;
  }
  if (isError) {
    content = (
      <div className={styles.errorMessage}>
        Niestety nie udało się pobrać danych na temat zamówienia
      </div>
    );
  }
  if (isSuccess) {
    content = (
      <div className={styles.orderInfoScreen}>
        <h1>Zamówienie</h1>
        <p>
          Dnia {dateTime.date}, godz. {dateTime.time}
        </p>
        <p>
          Numer zamówienia: <span>{data?._id}</span>
        </p>
        <div className={styles.orderInfoScreen_products}>
          {data?.products.map((product) => (
            <div
              className={styles.orderInfoScreen_products_product}
              key={product.pid}
            >
              <div className={styles.orderInfoScreen_products_product_img}>
                <img src={product.img[0]} alt={product.name} />
              </div>
              <p> {product.name}</p>
              <p>
                Cena: {product.qty} x {product.price.toFixed(2)}zł
              </p>
            </div>
          ))}
        </div>
        <div className={styles.orderInfoScreen_summary}>
          <p>
            Metoda dostawy: <span> {data?.deliveryMethod}</span>
          </p>
          <p>
            Całkowity koszt zamówienia :{' '}
            <span>{data?.price.toFixed(2)} zł</span>{' '}
          </p>
        </div>
        <div className={styles.orderInfoScreen_payment}>
          <p>
            Forma płatności: <span>{data?.paymentMethod}</span>{' '}
          </p>
          <p className={styles.orderInfoScreen_payment_yes}>
            {data?.paid && 'Opłacone'}
          </p>
          <p className={styles.orderInfoScreen_payment_no}>
            {!data?.paid && 'Nieopłacone'}
          </p>
          {!data?.paid && <button type="button">Opłać</button>}
        </div>
      </div>
    );
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{content}</>;
};

export default OrderInfoScreen;
