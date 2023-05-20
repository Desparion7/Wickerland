import styles from './OrdersListScreen.module.css';
import { useGetUserOrdersQuery } from '../app/slices/orderApiSlice';
import OrderInfo from '../components/OrderListScreen/OrderInfo';
import LoadingSpinner from '../ui/LoadingSpinner';

const OrdersListScreen = () => {
  const { data, isLoading, isError } = useGetUserOrdersQuery();

  return (
    <section className={styles.ordersList}>
      <h1>Moje zamówienia</h1>
      {isLoading && <LoadingSpinner />}
      {isError && (
        <div className={styles.errorMsg}>
          Niestety nie udało się pobrać listy zamówień. Błąd serwera.
        </div>
      )}
      <div className={styles.ordersList_box}>
        {data?.map((order) => (
          <div key={order._id}>
            <OrderInfo order={order} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrdersListScreen;
