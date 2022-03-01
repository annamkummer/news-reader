import ArticleContainer from './ArticleContainer'

function Home() {
  return (
    <div className="home-view">
      <h1>Read top stories from the New York Times</h1>
      <label>Choose a category:
        <select>
            <option>All...</option>
        </select>
      </label>
      <ArticleContainer />
    </div>
  );
}

export default Home;
