import { useState } from 'react';
import styles from './SignUpScreen.module.css';
import SignUp from '../components/SignUpScreen/SignUp';
import Login from '../components/SignUpScreen/Login';

const SignUpScreen = () => {
  const [toggleForm, setToggleFrom] = useState(false);

  return (
    <div className={styles.signUpScreen}>
      {toggleForm && <Login />}
      {!toggleForm && <SignUp />}
      <div className={styles.signUpScreen_toggleView}>
        <button
          onClick={() => {
            setToggleFrom(!toggleForm);
            window.scrollTo(0, 0);
          }}
          type="button"
        >
          {toggleForm ? 'Zarejestruj się' : 'Zaloguj się'}
        </button>
        <p>
          Witaj! Cieszymy się, że zdecydowałeś/aś się skorzystać z naszej
          platformy. Chcielibyśmy poinformować Cię, że utworzenie konta na
          naszej stronie pozwoli Ci mieć dostęp do historii swoich zakupów oraz
          pozwoli Ci szybciej i łatwiej dokonywać kolejnych transakcji.
          Zarejestruj się już teraz i skorzystaj z pełni funkcjonalności naszej
          platformy.
        </p>
      </div>
    </div>
  );
};

export default SignUpScreen;
