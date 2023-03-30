import styles from './HomePage.module.css';
import HomePageProducts from '../components/HomePage/HomePageProducts/HomePageProducts';
import HomePageCarousel from '../components/HomePage/HomePageCarousel/HomePageCarousel';
import AbooutUs from '../components/HomePage/AboutUs/AbooutUs';

const HomePage = () => {
	return (
		<section className={styles.homepage}>
			<div className={styles.homepage__photo}>
				<img src='./wicker1.PNG' alt='wiklinowy koszyk' />
			</div>
			<HomePageProducts />
			<HomePageCarousel />
			<AbooutUs />
		</section>
	);
};

export default HomePage;
