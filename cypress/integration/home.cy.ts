/// <reference types="cypress" />
describe('Searching Drinks', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/*').as(
      'cocktailApi',
    )
    cy.visit('/')
  })
  it('should list drinks categories', () => {
    cy.get('[data-cy="select"]')
      .select('Ordinary Drink')
      .should('have.value', 'Ordinary Drink')
  })

  it('should have correct table headers', () => {
    cy.get('[data-cy="select"]').select('Ordinary Drink')
    cy.wait('@cocktailApi')
    cy.get('[data-cy="1"]').should('have.text', 'Categoria')
    cy.get('[data-cy="0"]').should('have.text', 'Bebida')
  })

  it('should display drinks by categories', () => {
    cy.get('[data-cy="select"]').select('Ordinary Drink')
    cy.wait('@cocktailApi')
    cy.get('table tbody td:nth-child(3)').each((cell) => {
      cy.wrap(cell).should('have.text', 'Ordinary Drink')
    })
  })

  it('should search by drink name', () => {
    cy.get('form input').last().type('Martini')
    cy.get('form button').click()
    cy.wait('@cocktailApi')
    cy.get('table tbody td:nth-child(2)').each((cell) => {
      cy.wrap(cell).should('contain.text', 'Martini')
    })
  })

  it('should either search by category or by name', () => {
    cy.get('[data-cy="select"]').select('Ordinary Drink')
    cy.get('form input').last().should('be.disabled')
  })
})
