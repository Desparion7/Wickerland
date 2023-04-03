import styles from './ProductPhotoCarousel.module.css';

interface PropsType {
	img: string[];
	alt: string;
}

const ProductPhotoCarousel = ({ img, alt }: PropsType) => {
	return (
		<div className={styles.productPhotoCarousel}>
			<img src={img[0]} alt={alt} />
		</div>
	);
};

export default ProductPhotoCarousel;
