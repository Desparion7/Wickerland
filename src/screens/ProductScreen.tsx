import styles from './ProductScreen.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ModalPhotoFull from '../components/ProductScreen/ModalPhotoFull';
import ProductPhotoCarousel from '../components/ProductScreen/ProductPhotoCarousel';
import MoreAboutProduct from '../components/ProductScreen/MoreAboutProduct';
import AboutProduct from '../components/ProductScreen/AboutProduct';
import { useGetProductByIdQuery } from '../app/slices/productsApiSlice';
import { Product } from '../interface/products-interface';
import LoadingSpinner from '../ui/LoadingSpinner';

let product: Product;

const ProductScreen = () => {
	const param = useParams();
	const [fullImg, setFullImg] = useState(false);

	const [currentSlide, setCurrentSlide] =
		useState(0); /*number of actual img for zoom */

	useEffect(() => {
		if (fullImg) {
			//Add class to body for hide scroll when img is full screen
			document.body.classList.add('no-scroll');
		} else {
			// Remove class to get back scroll
			document.body.classList.remove('no-scroll');
		}
	}, [fullImg]);

	// hook to fetch data about product
	const { data, isSuccess, isLoading, isError } = useGetProductByIdQuery({
		pid: param.id as string,
	});

	if (isSuccess) {
		product = data.product;
	}

	return (
		<>
			{isError && (
				<div className={styles.errorMessage}>
					Coś poszło nie tak. Nie udało się pobrać danego produktu!
				</div>
			)}
			{isLoading && <LoadingSpinner />}
			{isSuccess && (
				<>
					{fullImg && (
						<ModalPhotoFull
							img={product?.img}
							setFullImg={setFullImg}
							currentSlide={currentSlide}
						/>
					)}
					<div className={styles.productScreen}>
						<div className={styles.productScreen_product}>
							<ProductPhotoCarousel
								img={product?.img as string[]}
								alt={product?.name as string}
								setFullImg={setFullImg}
								setCurrentSlide={setCurrentSlide}
							/>
							<AboutProduct product={product} />
						</div>
						<MoreAboutProduct
							parameters={product?.parameters}
							description={product?.description}
						></MoreAboutProduct>
					</div>
				</>
			)}
		</>
	);
};

export default ProductScreen;
