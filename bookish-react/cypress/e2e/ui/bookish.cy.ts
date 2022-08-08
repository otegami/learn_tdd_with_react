describe('Bookish application', () => {
  it('Visits the bookish', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h2[data-test="heading"]').contains('Bookish')
  })

  it('Show a book lsit', () => {
    cy.visit('http://localhost:3000/')
    cy.get('div[data-test="book-list"]').should('exist')
    cy.get('div.book-item').should((books) => {
      expect(books).to.have.length(2)

      const titiles = [...books].map(x => x.querySelector('h2').innerHTML)
      expect(titiles).to.deep.equal(['Refactoring', 'Domain-driven design'])
    })
  })
})
