import styles from './LoginMenu.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RiCloseFill } from 'react-icons/ri';
import { toggleLoginMenuView } from '../../app/slices/slideMenuSlice';

const LoginMenu = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [cartAnimation, setCartAnimation] = useState(styles.show_loginMenu);

	// function to toggle login menu
	const handlerHideMenu = () => {
		setTimeout(() => {
			dispatch(toggleLoginMenuView(false));
		}, 150);
		setCartAnimation(styles.hide_loginMenu);
	};
	// function to login
	const handlerLogin = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<div className={styles.loginMenu}>
			<div className={`${styles.loginMenu__main} ${cartAnimation}`}>
				<div className={styles.loginMenu__main_title}>
					<p> Logowanie</p>
					<div
						className={styles.loginMenu__main_title_icon}
						onClick={handlerHideMenu}
					>
						<RiCloseFill />
						<p>Zamknij</p>
					</div>
				</div>
				<form onSubmit={handlerLogin}>
					<label htmlFor=''>
						Nazwa użytkownika: <span>*</span>
					</label>
					<input type='text' />
					<label htmlFor=''>
						Hasło: <span>*</span>
					</label>
					<input type='text' />
					<button>Zaloguj się</button>
				</form>
				<p className={styles.loginMenu__main_restore}>Zapomniałeś hasła?</p>
				<div className={styles.loginMenu__main_sigupBox}>
					<p>Nie masz jeszcze konta ?</p>
					<button
						onClick={() => {
							navigate('/rejestracja');
							handlerHideMenu();
						}}
					>
						Zarejestruj się
					</button>
				</div>
			</div>
			<div
				className={`${styles.loginMenu__backdrop}`}
				onClick={handlerHideMenu}
			></div>
		</div>
	);
};

export default LoginMenu;
