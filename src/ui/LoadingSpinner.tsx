import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
	return (
		<div className={styles.spinner_box}>
			<div className={styles.lds_ring}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default LoadingSpinner;
