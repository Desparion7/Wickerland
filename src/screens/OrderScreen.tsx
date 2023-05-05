/* eslint-disable no-underscore-dangle */
import { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from './OrderScreen.module.css';
import { cartItems, emptyCart } from '../app/slices/cartSlice';
import { useCreateOrderMutation } from '../app/slices/orderApiSlice';
import { OrderType } from '../interface/order-interface';
import LoadingSpinnerOnButton from '../ui/LoadingSpinnerOnButton';
import { store } from '../app/store';

interface FormErrors {
  name?: string;
  surname?: string;
  companyName?: string;
  street?: string;
  postcode?: string;
  city?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const OrderScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProducts = useSelector(cartItems);
  const formRef = useRef<HTMLFormElement>(null);
  const [createOrder, { isLoading, isError }] = useCreateOrderMutation();

  const [customer, setCustomer] = useState<FormErrors>({
    name: '',
    surname: '',
    companyName: '',
    street: '',
    postcode: '',
    city: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState(false);
  const [statusError, setStatusError] = useState(false);

  const [deliveryMethod, setDeliveryMethod] = useState(
    'Kurier, Pocztex: 29,00 zł'
  );
  const [paymentMethod, setPaymentMethod] = useState('Przelew bankowy');
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryMethod(e.target.value);
  };
  // If cart is empty no access to order screen
  useEffect(() => {
    if (cartProducts.length === 0) {
      navigate('/');
    }
  }, [cartProducts, navigate]);

  // function to count full price
  const totalPrice = cartProducts.reduce((acc, obiekt) => {
    return acc + obiekt.qty * obiekt.price;
  }, 0);
  let totalPriceWithDelivery: number;
  if (deliveryMethod === 'Kurier, Pocztex: 29,00 zł') {
    totalPriceWithDelivery = totalPrice + 29;
  } else {
    totalPriceWithDelivery = totalPrice + 39;
  }
  // function to set payment method
  const handleChangePayment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };
  // function to validate form
  const validate = useCallback(() => {
    const validationErrors: FormErrors = {};
    if (!customer.name) {
      validationErrors.name = 'Pole wymagane';
    }
    if (!customer.surname) {
      validationErrors.surname = 'Pole wymagane';
    }
    if (!customer.email) {
      validationErrors.email = 'Pole wymagane';
    } else if (!/\S+@\S+\.\S+/.test(customer.email)) {
      validationErrors.email = 'Nieprawidłowy adres e-mail';
    }
    if (!customer.street) {
      validationErrors.street = 'Pole wymagane';
    }
    if (!customer.postcode) {
      validationErrors.postcode = 'Pole wymagane';
    }
    if (!customer.city) {
      validationErrors.city = 'Pole wymagane';
    }
    if (!customer.phone) {
      validationErrors.phone = 'Pole wymagane';
    } else if (!/^\d{9}$/.test(customer.phone)) {
      validationErrors.phone = 'Nieprawidłowy numer telefonu';
    }
    return validationErrors;
  }, [customer]);

  // function to create new order
  const handlerSendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      if (!status) {
        setStatusError(true);
        return;
      }
      // send to Api
      const response = await createOrder({
        name: customer.name,
        surname: customer.surname,
        companyName: customer.companyName,
        street: customer.street,
        postcode: customer.postcode,
        city: customer.city,
        phone: customer.phone,
        email: customer.email,
        message: customer.message,
        price: totalPriceWithDelivery,
        paymentMethod,
        deliveryMethod,
        products: cartProducts,
      } as OrderType);

      if ('data' in response) {
        const { data } = response;
        dispatch(emptyCart());
        localStorage.setItem(
          'cartItems',
          JSON.stringify(store.getState().cart)
        );
        navigate(`/płatność/${data?._id}`);
      }
      // clean inputs
      setCustomer({
        name: '',
        surname: '',
        companyName: '',
        street: '',
        postcode: '',
        city: '',
        phone: '',
        email: '',
        message: '',
      });
      // clean errors
      setErrors({});
    } else {
      if (!status) {
        setStatusError(true);
      }
      setErrors(validationErrors);
    }
  };
  // function to set change inputs value
  const handleCustomerChange = (key: string, value: string) => {
    setCustomer({ ...customer, [key]: value });
    setErrors({ ...errors, [key]: undefined });
  };

  return (
    <section className={styles.orderScreen}>
      <div className={styles.orderScreen_from}>
        <h2>Dane Płatności</h2>
        <form action="" ref={formRef} id="myForm" onSubmit={handlerSendForm}>
          <label htmlFor="name">
            Imię <span>*</span>
          </label>
          <input
            type="text"
            id="name"
            value={customer.name}
            onChange={(e) => handleCustomerChange('name', e.target.value)}
            className={errors.name ? styles.error_input : ''}
            placeholder={errors.name ? errors.name : ''}
          />
          <label htmlFor="surname">
            Nazwisko <span>*</span>
          </label>
          <input
            type="text"
            id="surname"
            value={customer.surname}
            onChange={(e) => handleCustomerChange('surname', e.target.value)}
            className={errors.surname ? styles.error_input : ''}
            placeholder={errors.surname ? errors.surname : ''}
          />
          <label htmlFor="companyname">Nazwa firmy(opcjonalnie)</label>
          <input
            type="text"
            id="companyname"
            value={customer.companyName}
            onChange={(e) =>
              handleCustomerChange('companyName', e.target.value)
            }
          />
          <label htmlFor="street">
            Ulica <span>*</span>
          </label>
          <input
            type="text"
            id="street"
            value={customer.street}
            onChange={(e) => handleCustomerChange('street', e.target.value)}
            className={errors.street ? styles.error_input : ''}
            placeholder={
              errors.street
                ? errors.street
                : 'nazwa ulicy,numer budynku/numer lokalu'
            }
          />
          <label htmlFor="postcode">
            Kod pocztowy <span>*</span>
          </label>
          <input
            type="text"
            pattern="[0-9\-]*"
            id="postcode"
            value={customer.postcode}
            onChange={(e) => handleCustomerChange('postcode', e.target.value)}
            className={errors.postcode ? styles.error_input : ''}
            placeholder={errors.postcode ? errors.postcode : ''}
          />
          <label htmlFor="city">
            Miasto <span>*</span>
          </label>
          <input
            type="text"
            id="city"
            value={customer.city}
            onChange={(e) => handleCustomerChange('city', e.target.value)}
            className={errors.city ? styles.error_input : ''}
            placeholder={errors.city ? errors.city : ''}
          />
          <label htmlFor="phone">
            Numer telefonu <span>*</span>
          </label>
          <input
            type="number"
            id="phone"
            value={customer.phone}
            onChange={(e) => handleCustomerChange('phone', e.target.value)}
            className={errors.phone ? styles.error_input : ''}
            placeholder={errors.phone ? errors.phone : ''}
          />
          <label htmlFor="email">
            Adres e-mail <span>*</span>
          </label>
          <input
            type="email"
            id="email"
            value={customer.email}
            onChange={(e) => handleCustomerChange('email', e.target.value)}
            className={errors.email ? styles.error_input : ''}
            placeholder={errors.email ? errors.email : ''}
          />
          <label htmlFor="comments">Uwagi do zamówienia(opcjonalnie)</label>
          <textarea
            name="comments"
            id="comments"
            value={customer.message}
            onChange={(e) => handleCustomerChange('message', e.target.value)}
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
            <p className={styles.orderScreen_order_body_price}>
              {(product.qty * product.price).toFixed(2)} zł
            </p>
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
                checked={deliveryMethod === 'Kurier, Pocztex: 29,00 zł'}
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
                checked={deliveryMethod === 'Kurier pobranie, Pocztex 39,00 zł'}
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
            {totalPriceWithDelivery.toFixed(2)} zł
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
            <label htmlFor="Przelew bankowy">Przelew tradycyjny</label>
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
              Przelew PayU lub Przelewy24
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
          <input
            type="checkbox"
            checked={status}
            onChange={() => {
              setStatus(!status);
              setStatusError(false);
            }}
          />
          <label>
            Przeczytałem/am i akceptuję <Link to="/regulamin">regulamin</Link>
            <span>*</span>
          </label>
        </div>
        {statusError && (
          <div className={styles.statusError}>
            Do zakupu niezbędna jest akceptacja regulaminu
          </div>
        )}
        <button type="submit" form="myForm">
          {isLoading ? <LoadingSpinnerOnButton /> : ' Kupuję i płacę'}
        </button>
        {isError && (
          <div className={styles.orderScreen_order_error}>
            Przepraszamy, ale nie udało się złożyć zamówienia z powodu błędu po
            stronie serwera. Prosimy spróbować ponownie.
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderScreen;
