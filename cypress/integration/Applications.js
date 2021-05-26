describe('Applications Page', () => {
  beforeEach(() => {
    cy.fixture('user').then((testUser) => {
      cy.intercept('https://fetching-friends-backend.herokuapp.com/api/v1/users?email=leslie@gmail.com', testUser)
    })
    cy.visit('http://localhost:3000/')
    cy.get('input').type('leslie@gmail.com').get('.login').click().get('.pend').click()
  })
  it('should update the user title', () => {
    cy.get('.username').contains('soledad\'s Pending Applications')
  })
  it('should have a user pending applications', () => {
    cy.get('.my-pets').children('h2').contains('My Applications')
  })
  it('should have a pending applications section for the users pets', () => {
    cy.get('.favorite-pets').children('h2').contains('Applications Pending')
  })
  it('should contain info cards about user pending applications', () => {
    cy.get('.user-app').children().should('have.length', '4')
  })
  it('should contain info cards about user pet applications', () => {
    cy.get('.user-pets').children('.application-card').should('have.length', '4')
  })
  it('should have buttons to deny or show interest of pending pet', () => {
    cy.get('.application-button').first().contains('Interested').next('button').contains('Deny')
  })
})
