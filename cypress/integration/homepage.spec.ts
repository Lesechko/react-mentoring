describe('should render home page', () => {
  it('renders correctly', () => {
    cy.visit('/')
    cy.get('#container').should('exist')
  })

  it('renders correctly', () => {
    cy.visit('/')
    cy.get('#movie').click()
    cy.url().should('include', 'movie')
  })

  it('search value display correctly', () => {
    cy.visit('/')
    cy.get('#input').type('fake_film').should('have.value', 'fake_film')
  })
})
