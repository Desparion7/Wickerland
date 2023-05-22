import { Link } from 'react-router-dom';
import styles from './OrderInfo.module.css';
import { OrderResponseType } from '../../interface/order-interface';

interface PropsType {
  order: OrderResponseType;
}

const OrderInfo = ({ order }: PropsType) => {
  const { date } = order;
  const dateTimeString = date.toString();

  const dateTime = {
    date: dateTimeString.slice(0, 10),
    time: dateTimeString.slice(11, 16),
  };

  return (
    <div className={styles.orderInfo}>
      <div className={styles.orderInfo_dateTime}>
        <p>Data:</p>
        <div> {dateTime.date},</div>
        <div> {dateTime.time}</div>
      </div>
      {order.products.map((product) => (
        <div className={styles.orderInfo_product} key={product.pid}>
          <div className={styles.orderInfo_product_img}>
            <img src={product.img[0]} alt={product.name} />
          </div>
          <div className={styles.orderInfo_product_prop}>
            <p>{product.name}</p>
            <p className={styles.orderInfo_product_prop_qty}>
              {product.qty} x {product.price.toFixed(2)}zł
            </p>
          </div>
        </div>
      ))}
      <div className={styles.orderInfo_summary_box}>
        <div className={styles.orderInfo_summary}>
          Dostawa: <span>{order?.deliveryMethod}</span>
        </div>
        <div className={styles.orderInfo_summary}>
          Razem:<span>{order?.price.toFixed(2)} zł</span>
        </div>
        <div className={styles.orderInfo_summary}>
          <Link to={`/zamówienie/${order._id}`}>Więcej</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
