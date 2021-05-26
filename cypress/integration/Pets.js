describe('pets', () => {
  beforeEach(() => {
    cy.fixture('user').then((testUser) => {
      cy.intercept('https://fetching-friends-backend.herokuapp.com/api/v1/users?email=leslie@gmail.com', testUser)
    })
    cy.visit('http://localhost:3000/')
    cy.get('input').type('leslie@gmail.com').get('.login').click()
  })
  it('should show my friends on home page  ', () => {
    cy.get('.card-image').should('have.attr', 'src').should('include',"https://thehappypuppysite.com/wp-content/uploads/2019/04/How-Long-Do-Pugs-Live-long.jpg")
  })

  it('should show my favorites on home page  ', () => {
    cy.get('.card-image').last().should('have.attr', 'src').should('include',"https://www.pumpkin.care/blog/wp-content/uploads/2020/11/10-Best-Names-For-Tabby-Cats.jpg")
  })

  it('should update url when looking for new pets', () => {
    cy.get(".search.button").first().click().url().should('include','/all-pets/dogs')
    .get('.button').last().click()
    cy.get(".search.button").last().click().url().should('include','/all-pets/cats')
  })

  it('should take you home when you click the back button', () => {
    cy.get(".search.button").first().click()
    .get('.button').last().click()
    .url().should('include','/homepage')
  })

  it('should filter pets', () => {
    cy.get(".search.button").first().click()
    .get('.ddl').first().select('F')
    .get('.button').first().click()
    .get('.card-image').first().should('have.attr', 'src').should('include', "https://thehappypuppysite.com/wp-content/uploads/2019/04/How-Long-Do-Pugs-Live-long.jpg")
  })

  it('should take you to pet info when clicked', () => {
    cy.get(".search.button").first().click()
    .get('.card-image').first().click()
    .get('h1').contains("This is a great dog!")
    .get('p').contains('Name: Sugar')
    .get('p').contains('Age: 4')
    .get('p').contains('Breed: Pug')
    .get('p').contains('Name: Sugar')
     .get('p').contains('House Trained')
  })

  it('should take you to home from info page ', () => {
    cy.get(".search.button").first().click()
    .get('.card-image').first().click()
    .get('.button').first().click()
    .url().should('include','/homepage')
  })
})

