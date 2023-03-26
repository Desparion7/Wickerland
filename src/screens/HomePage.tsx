import styles from './HomePage.module.css';
import HomePageProducts from '../components/HomePageProducts/HomePageProducts';
import HomePageCarousel from '../components/HomePageCarousel/HomePageCarousel';
import AbooutUs from '../components/AboutUs/AbooutUs';


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
