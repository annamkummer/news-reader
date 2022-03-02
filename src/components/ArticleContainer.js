import '../css/ArticleContainer.scss'
import { Link } from 'react-router-dom'

function ArticleContainer({ articles }) {

  let articleList;

  if (articles instanceof Error) {
    articleList = articles.message
  } else {
    articleList = articles.map((article, i) => {
      let id;
  
      if (!article.short_url.length) {
        const url = article.url.split('/')
        id = url[url.length - 1].split('.')[0]
      } else {
        const shortURL = article.short_url.split('/')
        id = shortURL[shortURL.length - 1]
      }
      return <Link key={i} className="article-title" to={`/article/${id}`}>{article.title}</Link>
    })
  }

  return (
    <div className="article-view">
      {articleList}
    </div>
  );
}

export default ArticleContainer;
