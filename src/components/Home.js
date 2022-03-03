import '../css/Home.scss'
import ArticleContainer from './ArticleContainer'
import { categories } from '../utils/utils'
import { useState, useEffect } from 'react'
import { getStories } from '../utils/apiCalls'

function Home() {

  const [stories, setStories] = useState([])
  const [category, setCategory] = useState('home')

  const categoryOptions = categories.map((category, i) => {
    return (
      <option key={i} value={category.fetch}>{category.option}</option>
    )
  })

  const selectCategory = (e) => {
    setCategory(e.target.value)
  }

  async function fetchStories(category) {
    setStories(await getStories(category))
  }

  useEffect(() => {
    fetchStories(category)
  }, [category])

  return (
    <div className="home-view">
      <h1 className="home-title">Read top stories from the New York Times</h1>
      <label className="selection" >Choose a category:
        <select className="dropdown" value={category} onChange={selectCategory}>
            {categoryOptions}
        </select>
      </label>
      <ArticleContainer articles={stories}/>
    </div>
  );
}

export default Home;
