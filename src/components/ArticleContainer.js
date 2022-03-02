
function ArticleContainer({ articles }) {

  const allArticles = articles.map((article, i) => {
    return <h3 key={i} className="article-title">{article.title}</h3>
  })

  return (
    <div className="article-view">
      {allArticles}
    </div>
  );
}

export default ArticleContainer;
