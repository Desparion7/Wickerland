import styles from './HomePage.module.css';
import Header from '../components/Header/Header';

const HomePage = () => {
	return (
		<header className={styles.homepage}>
			<Header></Header>
			<div className={styles.homepage__photo}>
				<img src='../public/wicker1.PNG' alt='wiklinowy koszyk' />
			</div>
		</header>
	);
};

export default HomePage;
