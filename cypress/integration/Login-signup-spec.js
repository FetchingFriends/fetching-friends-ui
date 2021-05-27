describe('Login Page', () => {
  beforeEach(() => {
    cy.fixture('user').then((testUser) => {
      cy.intercept('https://fetching-friends-backend.herokuapp.com/api/v1/users?email=leslie@gmail.com', testUser)
    })
    cy.visit('http://localhost:3000/')
  })
  it('should have a nav bar that contains a title and signup button', () => {
    cy.get('header').contains('fetching-friends').next().contains('Sign Up')
  })
  it('should have a text input and login button', () => {
    cy.get('input').type('name').should('have.value', 'name').get('.login').contains('Login')
  })
  it('should update the url to /homepage when button is submitted', () => {
    cy.get('input').type('leslie@gmail.com').get('.login').click().url().should('include','/homepage')
  })
  it('should display error message if no email is input', () => {
    cy.get('.login').click().get('.error').contains('Something went wrong')
  })
  it('should display error message if incorrect email is input', () => {
    cy.get('input').type('les@gmail.com').get('.login').click().get('.error').contains('Something went wrong')
  })
  it('should be able to return home using login button with error', () => {
    cy.get('.login').click().get('button').click().get('img').should('exist')
  })
})

describe('Sign Up', () => {
  it('should navigate you to the sign up page', () => {
    cy.get('.sign-up-button').click().get('h2').last().contains('Sign Up')
  })
  it('should have 2 text inputs', () => {
    cy.get('input').first().type('name').should('have.value', 'name').get('input').last().type('email').should('have.value', 'email')
  })
  // it('should display success message with successful sign up', () => {
  //   cy.visit('http://localhost:3000/sign-up')
  //   cy.intercept({
  //     method: 'POST',
  //     url: 'https://fetching-friends-backend.herokuapp.com/api/v1/users'
  //   },
  //   {
  //     statusCode: 201,
  //     body: {"username":'nametest', "email": "emailtest@mine.com"}
  //   })
  //   cy.get('input').first().type('nametest').get('input').last().type('emailtest@mine.com').get('button').click().get('h2').last().contains('You have')
  // })
  // it('should display an error message when an error comes back from api', () => {
  //   cy.visit('http://localhost:3000/sign-up')
  //   cy.intercept({
  //     method: 'POST',
  //     url: 'https://fetching-friends-backend.herokuapp.com/api/v1/users'
  //   },
  //   {
  //     statusCode: 500,
  //     body: {"username":'nametest', "email": "emailtest@mine.com"}
  //   })
  //   cy.get('button').click().get('h2').last().contains('That email')
  // })
})
