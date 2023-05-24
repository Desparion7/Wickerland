import { Formik, Form, Field, FormikHelpers } from 'formik';
import styles from './ChangeAddressScreen.module.css';
import { FormValues } from '../interface/address-interface';
import {
  useGetUserAddressQuery,
  useUpdateUserAddressMutation,
} from '../app/slices/usersApiSlice';
import LoadingSpinnerOnButton from '../ui/LoadingSpinnerOnButton';

const ChangeAddressScreen = () => {
  const { data } = useGetUserAddressQuery();

  const [update, { isLoading, isError, isSuccess }] =
    useUpdateUserAddressMutation();

  const updateAddress = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    await update({
      ...values,
    });

    actions.setSubmitting(false);
  };

  return (
    <div className={styles.changeAddressScreen}>
      <h1>Ustaw adres do wysyłki</h1>
      {isSuccess && (
        <p className={styles.changeAddressScreen_success}>
          Adres został poprawnie zapisany.
        </p>
      )}
      {isError && (
        <p className={styles.changeAddressScreen_error}>
          Przepraszamy wystąpił problem podczas zapisywania adresu. Prosimy
          spróbować ponownie.
        </p>
      )}
      <div className={styles.changeAddressScreen_address}>
        {data && (
          <Formik<FormValues>
            initialValues={{
              name: data.name,
              surname: data.surname,
              street: data.street,
              city: data.city,
              postcode: data.postcode,
              phone: data.phone,
              company: data.company,
            }}
            onSubmit={updateAddress}
          >
            <Form>
              <div className={styles.changeAddressScreen_address_box}>
                <label htmlFor="name">Imię:</label>
                <Field type="text" id="name" name="name" />
              </div>
              <div className={styles.changeAddressScreen_address_box}>
                <label htmlFor="surname">Nazwisko</label>
                <Field type="text" id="surname" name="surname" />
              </div>
              <div className={styles.changeAddressScreen_address_box}>
                <label htmlFor="street">Ulica</label>
                <Field
                  type="text"
                  placeholder="nazwa ulicy, numer budynku/lokalu"
                  id="street"
                  name="street"
                />
              </div>
              <div className={styles.changeAddressScreen_address_box}>
                <label htmlFor="city">Miasto</label>
                <Field type="text" id="city" name="city" />
              </div>
              <div className={styles.changeAddressScreen_address_box}>
                <label htmlFor="postcode">Kod pocztowy</label>
                <Field
                  type="text"
                  pattern="[0-9\-]*"
                  id="postcode"
                  name="postcode"
                />
              </div>
              <div className={styles.changeAddressScreen_address_box}>
                <label htmlFor="phone">Telefon</label>
                <Field type="text" id="phone" name="phone" />
              </div>
              <div className={styles.changeAddressScreen_address_box}>
                <label htmlFor="company">Dane firmy(opcjonalnie)</label>
                <Field type="text" id="company" name="company" />
              </div>
              <button type="submit">
                {isLoading ? <LoadingSpinnerOnButton /> : 'Zapisz adres'}
              </button>
            </Form>
          </Formik>
        )}
      </div>
    </div>
  );
};

export default ChangeAddressScreen;
