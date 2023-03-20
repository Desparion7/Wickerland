import styles from './HomePage.module.css';
import Header from '../components/Header/Header';
import HomePageProducts from '../components/HomePageProducts/HomePageProducts';
import HomePageCarousel from '../components/HomePageCarousel/HomePageCarousel';

const HomePage = () => {
	return (
		<header className={styles.homepage}>
			<Header></Header>
			<div className={styles.homepage__photo}>
				<img src='./wicker1.PNG' alt='wiklinowy koszyk' />
			</div>
			<HomePageProducts />
			<HomePageCarousel />
		</header>
	);
};

export default HomePage;
