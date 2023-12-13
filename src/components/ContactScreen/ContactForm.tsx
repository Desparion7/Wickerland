import { Formik, Form, Field, FormikHelpers, ErrorMessage } from 'formik';
import useSendMessageMutation from '../../app/slices/messageApi.slice';
import {
  MessageFormValues,
  MessageFormValuesError,
} from '../../types/message-type';
import styles from './ContactForm.module.css';
import LoadingSpinnerOnButton from '../../ui/LoadingSpinnerOnButton';

const ContactForm = () => {
  const [sendMessage, { isLoading, isSuccess, isError }] =
    useSendMessageMutation();

  // Function to validate form
  const validateForm = (values: MessageFormValues) => {
    const errors: Partial<MessageFormValuesError> = {};

    if (!values.name) {
      errors.name = 'pole wymagane';
    }
    if (!values.surname) {
      errors.surname = 'pole wymagane';
    }
    if (!values.email) {
      errors.email = 'pole wymagane';
    }
    if (!values.message) {
      errors.message = 'pole wymagane';
    }
    if (!values.consent) {
      errors.consent =
        'Do wysłania wiadomości wymagana jest akceptacja regulaminu';
    }
    return errors;
  };

  const sendMessageHandler = async (
    values: MessageFormValues,
    actions: FormikHelpers<MessageFormValues>
  ) => {
    await sendMessage({ ...values });
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <div className={styles.contactForm}>
      <h3>Masz Pytanie? Napisz do nas lub zadzwoń</h3>
      <h3>TEL: 723 930 427</h3>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          phone: '',
          message: '',
          consent: false,
        }}
        validate={validateForm}
        onSubmit={sendMessageHandler}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="name">Imię i</label>{' '}
              <label htmlFor="surname">
                nazwisko <span>*</span>
              </label>
            </div>
            <div className={styles.contactForm_name}>
              <div>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={errors.name && touched.name && styles.errorInput}
                  placeholder={
                    errors.name && touched.name ? errors.name : 'Imię'
                  }
                />
              </div>
              <div>
                <Field
                  type="text"
                  id="surname"
                  name="surname"
                  className={
                    errors.surname && touched.surname && styles.errorInput
                  }
                  placeholder={
                    errors.surname && touched.surname
                      ? errors.surname
                      : 'Nazwisko'
                  }
                />
              </div>
            </div>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className={errors.email && touched.email && styles.errorInput}
              placeholder={errors.email && touched.email ? errors.email : ''}
            />

            <label htmlFor="phone">Telefon</label>
            <Field type="tel" id="phone" name="phone" />
            <label htmlFor="message">
              Twoja wiadomość <span>*</span>
            </label>
            <Field
              as="textarea"
              cols={30}
              rows={10}
              id="message"
              name="message"
              className={errors.message && touched.message && styles.errorInput}
              placeholder={
                errors.message && touched.message ? errors.message : ''
              }
            />
            <p>
              <Field type="checkbox" id="consent" name="consent" />{' '}
              <span>*</span>
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
              udzielenia odpowiedzi na moje zapytanie zgodnie z polityką
              prywatności.
            </p>
            <ErrorMessage
              name="consent"
              component="div"
              className={styles.errorText}
            />
            <div>
              <button type="submit">
                {isLoading ? <LoadingSpinnerOnButton /> : 'Wyślij'}
              </button>
            </div>
            {isSuccess && (
              <div className={styles.successSendMessage}>
                Wiadomość została wysłana poprawnie, odpowiemy najszybciej jak
                to możliwe.
              </div>
            )}
            {isError && (
              <div className={styles.errorSendMessage}>
                Nie udało się wysłac wiadomości. Prosimy spróbować ponownie lub
                wysłać wiadomość bezposrednio na maila:{' '}
                <span>kontakt@wickerland.pl</span>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
