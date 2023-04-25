import styles from './LoadingSpinnerOnButton.module.css';

const LoadingSpinnerOnButton = () => {
  return (
    <div className={styles.spinner_box}>
      <div className={styles.lds_ring}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default LoadingSpinnerOnButton;
