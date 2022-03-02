const getStories = (category) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=JjtHnKuJ2fsaSKglmDtq3XsdKTUxRqe2`)
        .then(response => response.json())
        .then(data => data.results)
        .catch(err => console.log(err))
}

export default getStories