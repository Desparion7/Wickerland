import { useState, useEffect } from 'react';
import styles from './HomePageCarousel.module.css';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const HomePageCarousel = () => {
	const [slideNumber, setSlideNumber] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setSlideNumber((prevCounter) => {
				if (prevCounter < 3) {
					return prevCounter + 1;
				} else {
					return (prevCounter = 1);
				}
			});
		}, 6000);

		return () => clearInterval(interval);
	}, [slideNumber]);

	setInterval;
	return (
		<div className={styles.homePageCarousel}>
			<div
				className={styles.homePageCarousel_arrowLeft}
				onClick={() => {
					if (slideNumber === 1) {
						setSlideNumber(3);
					} else {
						setSlideNumber(slideNumber - 1);
					}
				}}
			>
				<MdArrowBackIosNew />
			</div>

			<div
				className={styles.homePageCarousel_arrowRight}
				onClick={() => {
					if (slideNumber === 3) {
						setSlideNumber(1);
					} else {
						setSlideNumber(slideNumber + 1);
					}
				}}
			>
				<MdArrowForwardIos />
			</div>

			{slideNumber === 1 && (
				<div className={styles.homePageCarousel_item}>
					<img
						src='./products on Homepage/kufer1-white.PNG'
						alt='Kufer wiklinowy, skrzynia'
						title='skrzynia'
						loading='lazy'
						className={styles.show_img}
					/>
					<div
						className={`${styles.homePageCarousel_item_info} ${styles.show_info}`}
					>
						<h3>Wytrzymały ekologiczny pojemnik</h3>
						<p>Kufer wiklinowy, skrzynia</p>
						<div className={styles.homePageCarousel_item_info_buy}>
							<p>250 zł</p>
							<button>Kup Teraz</button>
						</div>
					</div>
				</div>
			)}
			{slideNumber === 2 && (
				<div className={styles.homePageCarousel_item}>
					<img
						src='./products on Homepage/koszyk1-white.PNG'
						alt='Kufer wiklinowy skrzynia'
						title='skrzynia'
						loading='lazy'
						className={styles.show_img}
					/>
					<div
						className={`${styles.homePageCarousel_item_info} ${styles.show_info}`}
					>
						<p>Uniwersalny, wytrzymały</p>
						<h3>Klasyczny kosz wiklinowy</h3>
						<div className={styles.homePageCarousel_item_info_buy}>
							<p>250 zł</p>
							<button>Kup Teraz</button>
						</div>
					</div>
				</div>
			)}
			{slideNumber === 3 && (
				<div className={styles.homePageCarousel_item}>
					<img
						src='./products on Homepage/bujak1-white.PNG'
						alt='Fotel bujany Wickerland'
						title='fotel bujany'
						className={styles.show_img}
					/>
					<div
						className={`${styles.homePageCarousel_item_info} ${styles.show_info}`}
					>
						<p>Wykonany z pełnowartościowej wikliny</p>
						<h3>Fotel bujany Wickerland</h3>
						<div className={styles.homePageCarousel_item_info_buy}>
							<p>580 zł</p>
							<button>Kup Teraz</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default HomePageCarousel;
