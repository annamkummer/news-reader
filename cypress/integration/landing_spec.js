 describe('Landing View', () => {
    beforeEach(() => {
        cy.fixture('example.json').then((data) => {
            cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=JjtHnKuJ2fsaSKglmDtq3XsdKTUxRqe2`, {
                statusCode: 201,
                body: {
                    data
                }
            })
            console.log("DAAAAATTTAAAA", data)

        })

        // cy.fixture('us.json').then((data) => {
        //     cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=JjtHnKuJ2fsaSKglmDtq3XsdKTUxRqe2`, {
        //         statusCode: 201,
        //         body: {
        //             data: data.sampleArticles
        //         }
        //     })
        // })

    })
  
    it('As a user, when I visit the landing page, I should see a page title, a dropdown menu, and a list of articles.', () => {
        cy.visit('http://localhost:3000/')

        cy.get('.home-title').contains('Read top stories')
        cy.get('select').contains('All...')
        cy.get('.article-title').should('have.length', 6)
    })
  
    it('As a user, when I visit the landing page, the dropdown should be set to all, and I should be able to select another category.', () => {
        cy.visit('http://localhost:3000/')

        cy.get('select').first().contains('All...')
        cy.get('select').select('US')
        cy.get('select').select('World')
    })
  
    it('As a user, when I select a category from the dropdown, I should see the list of articles change to only include articles with that category.', () => {
        // URL change
        cy.visit('http://localhost:3000/')

        cy.get('select').select('US')
        cy.get('.article-title').should('have.length', 1)
        cy.get('.article-title').contains('As Tanks Rolled Into Ukraine')
    })
  
    // it('As a user, when I visit the landing page, I should be able to click on an article title and be taken to the detailed view for that article.', () => {
    //     // URL change
    // })

  
})
  