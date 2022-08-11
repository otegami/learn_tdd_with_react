import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';

export const cleanUpStubBooks = () => {
  return axios.delete('http://localhost:8080/books?_cleanup=true').catch(err => err)
}

export const feedStubBooks = () => {
  const books = [
    { "name": "Refactoring", "id": 1 },
    { "name": "Domain-driven design", "id": 2 },
    { "name": "Building Micro-service", "id": 3 }
  ];

  return books.map(item => axios.post('http://localhost:8080/books', item, { headers: { 'Content-Type': 'application/json' } }).catch(err => err))
};

describe('Bookish application', () => {
  beforeEach(() => {
    feedStubBooks()
    cy.wait(500)
  })

  afterEach(() => {
    cleanUpStubBooks()
  })

  it('Visits the bookish', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h2[data-test="heading"]').contains('Bookish')
  })

  it('Show a book lsit', () => {
    cy.visit('http://localhost:3000/')
    cy.get('div[data-test="book-list"]').should('exist')
    cy.get('div.book-item').should((books) => {
      expect(books).to.have.length(3)

      const titiles = [...books].map(x => x.querySelector('h2').innerHTML)
      expect(titiles).to.deep.equal(['Refactoring', 'Domain-driven design', 'Building Micro-service'])
    })
  })

  it('Goes to the detail page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('div[data-test="book-item-1"]').contains('View Details').eq(0).click()

    cy.url().should('include', '/books/1')
    cy.get('h2.book-title').contains('Refactoring')
  })
})
