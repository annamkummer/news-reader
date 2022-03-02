import { useLocation, Link } from 'react-router-dom'
import { getStory } from '../utils/apiCalls'
import { useState, useEffect } from 'react'

function ArticleContainer() {

    const url = useLocation().pathname.split('/')
    const articleId = url[url.length - 1]
    const [story, setStory] = useState({})

    async function getArticle() {
        setStory(await getStory(articleId))
    }

    useEffect(() => {
        getArticle()
    }, [articleId])

    return (
        <div className="article-view">
        <Link to='/'>Home</Link>
        {console.log(articleId)}
        <h3>{story.title}</h3>
        <p>{story.byline}</p>
        <p>{story.abstract}</p>
        <a href={story.url} target="_blank" rel="noreferrer">View full story on New York Times site</a>
        </div>
    )
}

export default ArticleContainer;
