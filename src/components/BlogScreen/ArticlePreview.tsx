import { Link } from 'react-router-dom';
import styles from './ArticlePreview.module.css';

export type ArticleType = {
  link: string;
  img: string;
  alt: string;
  day: string;
  month: string;
  title: string;
  text1: string;
  text2?: string[];
};

const ArticlePreview = ({
  link,
  img,
  alt,
  day,
  month,
  title,
  text1,
}: ArticleType) => {
  return (
    <div className={styles.articlePreview}>
      <div className={styles.articlePreview_img}>
        <Link to={link}>
          <img src={img} alt={alt} />
        </Link>
        <div className={styles.articlePreview_img_data}>
          <div className={styles.articlePreview_img_data_day}>{day}</div>
          <div className={styles.articlePreview_img_data_month}>{month}</div>
        </div>
      </div>
      <div className={styles.articlePreview_text}>
        <h3>{title}</h3>
        <p>{text1}</p>
        <Link to={link}>Czytaj dalej</Link>
      </div>
    </div>
  );
};

export default ArticlePreview;
