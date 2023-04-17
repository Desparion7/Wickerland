import { useState } from 'react';
import styles from './ProductPreview.module.css';
import { BsSearch } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../app/slices/cartSlice';
import { toggleCartMenu } from '../../app/slices/slideMenuSlice';
import PreviewModal from './PreviewModal';
import { store } from '../../app/store';

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
	const [showPreviewModal, setShowPreviewModal] = useState(false);
	const navigation = useNavigate();
	const dispatch = useDispatch();

	const handelNavigation = (id: string, category: string) => {
		navigation(`/produkt/${category}/${id}`);
	};

	const handlerAddToCart = () => {
		dispatch(
			addItem({
				pid: product.pid,
				qty: 1,
				price: product.price,
			})
		);
		dispatch(toggleCartMenu(true));
		localStorage.setItem('cartItems', JSON.stringify(store.getState().cart));
	};

	const price = product.price.toFixed(2);
	return (
		<>
			{showPreviewModal && (
				<PreviewModal
					setShowPreviewModal={setShowPreviewModal}
					product={product}
				/>
			)}
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
									handelNavigation(product.pid, product.category);
								}}
							/>
							<div
								className={`${styles.productPreview_img_focus_options} ${styles.show_options}`}
							>
								<BsSearch
									title='Szybki podgląd'
									onClick={() => {
										setShowPreviewModal(true);
									}}
								/>
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
									<p onClick={handlerAddToCart}>Dodaj do koszyka</p>
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
		</>
	);
};

export default ProductPreview;
