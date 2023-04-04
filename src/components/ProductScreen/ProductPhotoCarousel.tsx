import styles from './ProductPhotoCarousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CSSProperties } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

interface PropsType {
	img: string[];
	alt: string;
}

const ProductPhotoCarousel = ({ img, alt }: PropsType) => {
	const arrowStyles: CSSProperties = {
		position: 'absolute',
		zIndex: 4,
		top: 'calc(50% - 15px)',
		width: 30,
		height: 30,
		cursor: 'pointer',
		color: 'grey',
	};

	{
		/* /* Styles for .thumb and .carousel in index.css */
	}
	return (
		<div className={styles.productPhotoCarousel}>
			<Carousel
				showStatus={false}
				showIndicators={false}
				renderArrowPrev={(onClickHandler, hasPrev) =>
					hasPrev && (
						<MdArrowBackIosNew
							type='button'
							onClick={onClickHandler}
							style={{ ...arrowStyles, left: 15 }}
						></MdArrowBackIosNew>
					)
				}
				renderArrowNext={(onClickHandler, hasNext) =>
					hasNext && (
						<MdArrowForwardIos
							type='button'
							onClick={onClickHandler}
							style={{ ...arrowStyles, right: 15 }}
						></MdArrowForwardIos>
					)
				}
			>
				{img.map((photo) => (
					<div key={photo}>
						<img src={photo} alt={alt} />
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default ProductPhotoCarousel;
