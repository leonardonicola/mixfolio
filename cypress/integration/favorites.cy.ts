/// <reference types="cypress" />

describe('Favorites', () => {
  beforeEach(() => {
    cy.clearLocalStorage('favoriteDrinks')
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/*').as(
      'cocktailApi',
    )
  })
  it('should display favorite drinks', () => {
    cy.visit('/')
    cy.get('form input').last().type('Dry Martini')
    cy.get('form button').click()
    cy.wait('@cocktailApi')
    cy.get('table tbody td:nth-child(1)').click()
    cy.visit('/favoritos')
    cy.get('div figcaption h2').should('have.text', 'Dry Martini')
  })

  it('should display empty message', () => {
    cy.visit('/favoritos')
    cy.get('h1').first().should('contain.text', 'Você não tem favoritos!')
  })

  it('should desfavorite drinks', () => {
    cy.visit('/')
    cy.get('form input').last().type('Dry Martini')
    cy.get('form button').click()
    cy.wait('@cocktailApi')
    cy.get('table tbody td:nth-child(1)').click()
    cy.visit('/favoritos')
    cy.get('div figcaption div button').last().click()
    cy.get('div figcaption').should('not.exist')
    cy.get('h1').first().should('contain.text', 'Você não tem favoritos!')
  })
})
