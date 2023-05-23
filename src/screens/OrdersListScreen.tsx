import { useLocation } from 'react-router-dom';
import styles from './OrdersListScreen.module.css';
import { useGetUserOrdersQuery } from '../app/slices/orderApiSlice';
import OrderInfo from '../components/OrderListScreen/OrderInfo';
import LoadingSpinner from '../ui/LoadingSpinner';
import Pagination from '../ui/Pagination';

const OrdersListScreen = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const page = queryParams.get('strona');
  const { data, isLoading, isError } = useGetUserOrdersQuery({ page });

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
        {data?.orders.map((order) => (
          <div key={order._id}>
            <OrderInfo order={order} />
          </div>
        ))}
      </div>
      <Pagination pages={data?.totalPages} />
    </section>
  );
};

export default OrdersListScreen;
