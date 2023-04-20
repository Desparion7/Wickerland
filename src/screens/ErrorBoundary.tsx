import styles from './ErrorBoundary.module.css';

const ErrorBoundary = () => {
  return (
    <div className={styles.errorBoundary}>
      <p> Niestety stroną którą próbujesz otworzyć nie istnieje!</p>
      <img src="/notFound.PNG" alt="" />
    </div>
  );
};

export default ErrorBoundary;
