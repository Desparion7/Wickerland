import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import styles from './ModalPhotoFull.module.css';
import { RiCloseFill } from 'react-icons/ri';

interface PropsType {
	img: string[] | undefined;
	setFullImg: React.Dispatch<React.SetStateAction<boolean>>;
	currentSlide: number;
}

const PhotoFull = ({ img, setFullImg, currentSlide }: PropsType) => {
	// useEffect to srolle up when modal open to see close menu
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	// useEffect to close full screen img on ESC
	useEffect(() => {
		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				setFullImg(false);
			}
		}

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);
	return (
		<div>
			<div className={styles.photoFull_menu}>
				<RiCloseFill
					// Close Full screen img
					onClick={() => {
						setFullImg(false);
					}}
				/>
			</div>
			<div className={styles.photoFull_photo} aria-modal>
				<img src={img?.[currentSlide]} alt='zdjęcie produktu' />
			</div>
		</div>
	);
};

const ModalPhotoFull = ({ img, setFullImg, currentSlide }: PropsType) => {
	return (
		<div>
			{ReactDOM.createPortal(
				<PhotoFull
					img={img}
					setFullImg={setFullImg}
					currentSlide={currentSlide}
				/>,
				document.getElementById('popup-root')!
			)}
		</div>
	);
};

export default ModalPhotoFull;
