import styles from './PreviewModal.module.css';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

interface PropsType {
	setShowPreviewModal: React.Dispatch<React.SetStateAction<boolean>>;
	product: {
		pid: string;
		img: string[];
		category: string;
		name: string;
		amount: number;
		price: number;
	};
}

const PhotoFull = ({ setShowPreviewModal, product }: PropsType) => {
	const navigation = useNavigate();
	const [productAmount, setProductAmount] = useState('1');

	// useEffect to close full screen img on ESC
	useEffect(() => {
		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				setShowPreviewModal(false);
			}
		}

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	const handelNavigation = (id: string, category: string) => {
		navigation(`/produkt/${category}/${id}`);
	};

	return (
		<div className={styles.previewModal} aria-modal>
			<div
				className={styles.previewModal_backdrop}
				onClick={() => {
					setShowPreviewModal(false);
				}}
			/>
			<div className={`${styles.previewModal_main} ${styles.show_modal}`}>
				<div className={styles.previewModal_main_close}>
					<RiCloseFill
						onClick={() => {
							setShowPreviewModal(false);
						}}
					/>
				</div>
				<div className={styles.previewModal_main_img}>
					<img src={product.img[0]} alt={product.name} />
					<button
						onClick={() => {
							handelNavigation(product.pid, product.name);
						}}
					>
						Więcej
					</button>
				</div>
				<div className={styles.previewModal_main_product_info}>
					<h1 className={styles.previewModal_main_product_info_name}>
						{product?.name}
					</h1>
					<h2 className={styles.previewModal_main_product_info_price}>
						{product?.price?.toFixed(2)} zł
					</h2>
					<div className={styles.previewModal_main_product_info_buy}>
						{product && product?.amount > 0 ? (
							<>
								<div
									className={styles.previewModal_main_product_info_buy_amount}
								>
									<AiOutlineCheck />

									<p> Dostępna ilość {product?.amount} szt.</p>
								</div>
								<div className={styles.previewModal_main_product_info_buy_cart}>
									<button
										className={
											styles.previewModal_main_product_info_buy_cart_btn
										}
									>
										-
									</button>
									<input
										type='number'
										step='1'
										autoComplete='off'
										inputMode='numeric'
										pattern='[0-9]*'
										value={productAmount}
										onChange={(e) => {
											setProductAmount(e.target.value);
										}}
									/>
									<button
										className={
											styles.previewModal_main_product_info_buy_cart_btn
										}
									>
										+
									</button>
									<button
										className={
											styles.previewModal_main_product_info_buy_cart_btnAdd
										}
									>
										Dodaj do koszyka
									</button>
								</div>
							</>
						) : (
							<p className={styles.previewModal_main_product_info_buy_lack}>
								Brak w magazynie
							</p>
						)}
						<div className={styles.previewModal_main_product_info_buy_like}>
							<BsHeart />
							<p>Dodaj do ulubionych</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const PreviewModal = ({ setShowPreviewModal, product }: PropsType) => {
	return (
		<div>
			{ReactDOM.createPortal(
				<PhotoFull
					setShowPreviewModal={setShowPreviewModal}
					product={product}
				/>,
				document.getElementById('popup-root')!
			)}
		</div>
	);
};

export default PreviewModal;
