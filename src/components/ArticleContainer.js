import '../css/ArticleContainer.scss'
import { Link } from 'react-router-dom'

function ArticleContainer({ articles }) {

  const allArticles = articles.map((article, i) => {
    const shortURL = article.short_url.split('/')
    const id = shortURL[shortURL.length - 1]
    return <Link key={i} className="article-title" to={`/article/${id}`}>{article.title}</Link>
  })

  return (
    <div className="article-view">
      {allArticles}
    </div>
  );
}

export default ArticleContainer;
