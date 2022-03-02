export const getStories = (category) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=JjtHnKuJ2fsaSKglmDtq3XsdKTUxRqe2`)
        .then(response => response.json())
        .then(data => {
            if (data.status === "OK") {
                return data.results
            }
            throw new Error("Hmmm, something went wrong. Please check your internet connection and try again.")
        })
        .catch(err => err)
}

export const getStory = (id) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=JjtHnKuJ2fsaSKglmDtq3XsdKTUxRqe2`)
        .then(response => response.json())
        .then(data => {
            if (data.status === "OK") {
                return data.results.find(article => {
                    return article.short_url.includes(id) || article.url.includes(id)
                })
            }
            throw new Error("Hmmm, something went wrong. Please check your internet connection and try again.")
        })
        .catch(err => err)
}