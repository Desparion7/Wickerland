import styles from './BlogScreen.module.css';
import ArticlePreview from '../components/BlogScreen/ArticlePreview';
import { articles } from '../db/articles';

const BlogScreen = () => {
  return (
    <div className={styles.blogScreen}>
      {articles.map((article) => (
        <ArticlePreview
          key={article.title}
          link={article.link}
          img={article.img}
          alt={article.alt}
          day={article.day}
          month={article.month}
          title={article.title}
          text1={article.text1}
        />
      ))}
    </div>
  );
};

export default BlogScreen;
