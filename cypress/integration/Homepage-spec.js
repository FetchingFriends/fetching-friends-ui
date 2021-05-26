describe('User Homepage', () => {
  beforeEach(() => {
    cy.fixture('user').then((testUser) => {
      cy.intercept('https://fetching-friends-backend.herokuapp.com/api/v1/users?email=leslie@gmail.com', testUser)
    })
    cy.visit('http://localhost:3000/')
    cy.get('input').type('leslie@gmail.com').get('.login').click()
  })
  it('should have display the username at the top', () => {
    cy.get('.username').contains('soledad')
  })
  it('should have a friends section with friends', () => {
    cy.get('.friends').children().should('have.length', '3')
  })
  it('should have a favorites section with friends', () => {
    cy.get('.favorites').children().should('have.length', '1')
  })
  it('should have a section for finding new pets', () => {
    cy.get('.find').contains('Find')
  })
  it('should contain buttons for dog, cat and other', () => {
    cy.get('.dog').contains('Dog').get('.cat').contains('Cat').get('.other').contains('Other')
  })
  it('should take you to a new URL when click one of the search buttons', () => {
    cy.fixture('pet').then((testPet) => {
      cy.intercept('https://fetching-friends-backend.herokuapp.com/api/v1/users?email=leslie@gmail.com', testPet)
    })
    cy.get('.dog').click().url().should('include', 'all-pets/dogs')
  })
  it('should have a pending applications section that updates the url', () => {
    cy.get('.pend').click().url().should('include', '/applications')
  })
  it('should have a section for creating a new pet', () => {
    cy.get('.posting').click().url().should('include', '/post-a-friend')
  })
})
