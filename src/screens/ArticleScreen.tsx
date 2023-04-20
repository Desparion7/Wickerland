import { useParams } from 'react-router-dom';
import styles from './ArticleScreen.module.css';
import { articles } from '../db/articles';
import { ArticleType } from '../components/BlogScreen/ArticlePreview';

const ArticleScreen = () => {
  const params = useParams();

  const filteredArticles = articles.find((obj) => {
    return 'link' in obj && obj.link === params.id;
  });
  const article = { ...filteredArticles } as ArticleType;

  return (
    <div className={styles.articleScreen}>
      <h2>{article.title}</h2>
      <div className={styles.articleScreen_content}>
        <img src={article.img} alt={article.alt} />
        {article?.text2?.map((text) => (
          <p key={article.link}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default ArticleScreen;
