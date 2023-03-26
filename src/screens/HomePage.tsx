import styles from './HomePage.module.css';
import Header from '../components/Header/Header';
import HomePageProducts from '../components/HomePageProducts/HomePageProducts';
import HomePageCarousel from '../components/HomePageCarousel/HomePageCarousel';
import AbooutUs from '../components/AboutUs/AbooutUs';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
	return (
		<header className={styles.homepage}>
			<Header />
			<div className={styles.homepage__photo}>
				<img src='./wicker1.PNG' alt='wiklinowy koszyk' />
			</div>
			<HomePageProducts />
			<HomePageCarousel />
			<AbooutUs />
			<Footer />
		</header>
	);
};

export default HomePage;
