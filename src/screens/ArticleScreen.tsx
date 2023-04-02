import styles from './ArticleScreen.module.css';
import { articles } from '../db/articles';
import { useLocation, useParams } from 'react-router-dom';
import { ArticleType } from '../components/BlogScreen/ArticlePreview';

const ArticleScreen = () => {
	const location = useLocation();
	const params = useParams();
	console.log(location);

	const filteredArticles = articles.find((obj) => {
		return obj.hasOwnProperty('link') && obj['link'] === params.id;
	});
	const article = { ...filteredArticles } as ArticleType;

	return (
		<div className={styles.articleScreen}>
			<h2>{article.title}</h2>
			<div className={styles.articleScreen_content}>
				<img src={article.img} alt={article.alt} />
				{article?.text2?.map((text, index) => (
					<p key={index}>{text}</p>
				))}
			</div>
		</div>
	);
};

export default ArticleScreen;
