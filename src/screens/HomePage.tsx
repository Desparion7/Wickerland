import styles from './HomePage.module.css';
import Header from '../components/Header/Header';
import HomePageProducts from '../components/HomePageProducts/HomePageProducts';

const HomePage = () => {
	return (
		<header className={styles.homepage}>
			<Header></Header>
			<div className={styles.homepage__photo}>
				<img src='../public/wicker1.PNG' alt='wiklinowy koszyk' />
			</div>
			<HomePageProducts />
		</header>
	);
};

export default HomePage;
