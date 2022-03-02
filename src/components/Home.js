import ArticleContainer from './ArticleContainer'
import { categories, sampleArticles } from '../utils/utils'
import { useState, useEffect } from 'react'
import getStories from '../utils/apiCalls'

function Home() {

  const [stories, setStories] = useState([])

  // Displayed to the user ("All...")
  // In url ("/")
  // Sent to fetch ("home")
  const categoryOptions = categories.map((category, i) => {
    return (
      <option key={i}>{category.option}</option>
    )
  })

  async function fetchStories(category) {
    let fetchedStories = await getStories(category)
    setStories(fetchedStories)
  }

  useEffect(() => {
    // fetchStories('home')
    setStories(sampleArticles)
  }, [])

  return (
    <div className="home-view">
      <h1 className="home-title">Read top stories from the New York Times</h1>
      <label>Choose a category:
        <select>
            {categoryOptions}
        </select>
      </label>
      <ArticleContainer articles={stories}/>
    </div>
  );
}

export default Home;
