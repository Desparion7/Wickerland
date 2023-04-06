import { useState } from 'react';
import styles from './SignUpScreen.module.css';

const SignUpScreen = () => {
	const [toggleForm, setToggleFrom] = useState(false);
	const handlerLogin = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<div className={styles.signUpScreen}>
			{toggleForm && (
				<div className={styles.signUpScreen_form}>
					<h1>Logowanie</h1>
					<form onSubmit={handlerLogin}>
						<label htmlFor=''>
							Adres email: <span>*</span>
						</label>
						<input type='text' />
						<label htmlFor=''>
							Hasło: <span>*</span>
						</label>
						<input type='text' />
						<button>Zaloguj się</button>
						<p className={styles.signUpScreen_form_restore}>
							Zapomniałeś hasła?
						</p>
					</form>
				</div>
			)}
			{!toggleForm && (
				<div className={styles.signUpScreen_form}>
					<h1>Rejestracja</h1>
					<form onSubmit={handlerLogin}>
						<label htmlFor=''>
							Adres email: <span>*</span>
						</label>
						<input type='text' />
						<label htmlFor=''>
							Hasło: <span>*</span>
						</label>
						<input type='text' />
						<label htmlFor=''>
							Powtórzone hasło: <span>*</span>
						</label>
						<input type='text' />
						<p>
							Na adres e-mail zostanie wysłany odnośnik do ustawienia nowego
							hasła.
						</p>
						<p>
							Twoje dane osobowe zostaną użyte do obsługi twojej wizyty na
							naszej stronie, zarządzania dostępem do twojego konta i dla innych
							celów o których mówi nasza polityka prywatności.
						</p>
						<button>Zarejestruj się</button>
					</form>
				</div>
			)}
			<div className={styles.signUpScreen_toggleView}>
				<button
					onClick={() => {
						setToggleFrom(!toggleForm);
					}}
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
