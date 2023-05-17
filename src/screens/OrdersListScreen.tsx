import styles from './OrdersListScreen.module.css';
import { useGetUserOrdersQuery } from '../app/slices/orderApiSlice';

const OrdersListScreen = () => {
  const { data, isSuccess, isLoading, isError } = useGetUserOrdersQuery();

  return <section className={styles.ordersList}>OrdersListScreen</section>;
};

export default OrdersListScreen;
