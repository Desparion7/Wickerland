import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiInstagram } from 'react-icons/si';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_box}>
				<div className={styles.footer_box__logo}>
					<h2>Wicker</h2>
					<img src='/basket.PNG' />
					<h2>Land</h2>
				</div>
				<div className={styles.footer_box__contact}>
					<p>ul. Żwirki i Wigury 32</p>
					<p>37-420 Rudnik nad Sanem</p>
				</div>
			</div>
			<div className={styles.footer_box}>
				<div className={styles.footer_box_title}>Kontakt</div>
				<p>
					<FaPhone />{' '}
					<span className={styles.footer_box_link}>723 930 427</span>
				</p>
				<p>
					<MdEmail />
					<span className={styles.footer_box_link}>kontakt@wickerland.pl</span>
				</p>
				<p>
					<FaFacebookF />
					<a href='https://www.facebook.com/piotr.szabat.16' target='_blank'>
						Nasz Facebook
					</a>
				</p>
				<p>
					<SiInstagram />
					<a href='https://www.instagram.com/ciabatek/' target='_blank'>
						Nasz Instagram
					</a>
				</p>
			</div>
			<div className={styles.footer_box}>
				<div className={styles.footer_box_title}>Zobacz równierz</div>
				<Link to='/'>Blog</Link>
				<Link to='/'>Dane Firmy</Link>
				<Link to='/'>Regulamin</Link>
				<Link to='/'>Polityka prywatności</Link>
			</div>
		</footer>
	);
};

export default Footer;
