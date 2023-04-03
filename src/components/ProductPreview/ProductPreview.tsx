import { useState } from 'react';
import styles from './ProductPreview.module.css';
import { BsSearch } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

interface propsType {
	product: {
		pid: string;
		img: string[];
		category: string;
		name: string;
		amount: number;
		price: number;
	};
	// Render the same component in different gird view
	grid: number;
}

const ProductPreview = ({ product, grid }: propsType) => {
	const [isFocus, setIsFocus] = useState(false);
	const navigation = useNavigate();

	const handelNavigation = (id: string, name: string) => {
		navigation(`/produkt/${name}/${id}`);
	};

	const price = product.price.toFixed(2);
	return (
		<div
			// Change styles if different grid
			className={`${
				grid === 2
					? styles.productPreview
					: grid === 3
					? styles.productPreview3
					: styles.productPreview4
			}`}
			onMouseEnter={() => {
				setIsFocus(true);
			}}
			onMouseLeave={() => {
				setIsFocus(false);
			}}
		>
			<div
				// Change styles if different grid
				className={`${
					grid === 2
						? styles.productPreview_img
						: grid === 3
						? styles.productPreview_img3
						: styles.productPreview_img4
				}`}
			>
				<div>
					{!isFocus && (
						<img
							src={product.img[0]}
							alt={product.name}
							onClick={() => {
								handelNavigation(product.pid, product.name);
							}}
						/>
					)}
				</div>
				{isFocus && (
					<div className={styles.productPreview_img_focus}>
						<img
							src={product.img[1]}
							alt={product.name}
							title={product.name}
							className={styles.zoom}
							loading='lazy'
							onClick={() => {
								handelNavigation(product.pid, product.name);
							}}
						/>
						<div
							className={`${styles.productPreview_img_focus_options} ${styles.show_options}`}
						>
							<BsSearch title='Szybki podgląd' />
							<BsHeart title='Dodaj do ulubionych' />
						</div>
					</div>
				)}
			</div>
			<div className={styles.productPreview_info}>
				<div
					className={styles.productPreview_info_name}
					onClick={() => {
						handelNavigation(product.pid, product.name);
					}}
				>
					{product.name}
				</div>
				<div className={styles.productPreview_info_category}>
					{product.category}
					{isFocus ? (
						<div
							className={`${styles.productPreview_info_cart} ${styles.show_options}`}
						>
							{product.amount !== 0 ? (
								<p>Dodaj do koszyka</p>
							) : (
								<span>Brak na magazynie</span>
							)}
						</div>
					) : (
						<div className={styles.productPreview_info_price}>{price} zł</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductPreview;
