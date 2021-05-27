import { wait } from "@testing-library/dom"

describe('pets', () => {
  beforeEach(() => {
    cy.fixture('user').then((newPet) => {
      cy.intercept(' https://fetching-friends-backend.herokuapp.com/api/v1/pets', newPet)
    })
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

  it('should update url when posting a pet for adoption', () => {
    cy.get('.posting').first().click().url().should('include','/post-a-friend')
  })

  it('should be able to fill out form', () => {
    cy.get('.posting').first().click().url().should('include','/post-a-friend')
    cy.get('[type="radio"]').first().check() 
    .get('.submit-question').click()
    cy.get('[type="text"]').type('Buddy')
    .get('.submit-question').click()
    cy.get('[type="number"]').type('3')
    .get('.submit-question').click()
    cy.get('[type="text"]').type('Bull Dawg')
    .get('.submit-question').click()
    cy.get('[type="text"]').type('He is very mean and bites kids.')
    .get('.submit-question').click()
    cy.get('[type="radio"]').first().check() 
    .get('.submit-question').click()
    cy.get('[type="text"]').type('https://www.purina.com.au/-/media/project/purina/main/breeds/puppies/puppy-bulldog.jpg')
    .get('.submit-question').click()
    cy.get('h4').contains('Confirm your information')
    cy.get('h1').contains('"He is very mean and bites kids."')
    cy.get('p').contains('Name: Buddy')
    cy.get('p').contains('Age: 3')
    cy.get('p').contains('Breed: Bull Dawg')
    cy.get('p').contains('Gender: M')
    cy.get('.completed-question').click()
    cy.get('.back-button').click()
  })
})