import axios from "axios"

export const cleanUpStubBooks = () => {
  return axios.delete('http://localhost:8080/books?_cleanup=true').catch(err => err)
}

export const feedStubBooks = () => {
  const books = [
    {
      "name": "Refactoring",
      "id": 1,
      "description": "Martin Fowler's Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software."
    },
    {
      "name": "Domain-driven design",
      "id": 2,
      "description": "Explains how to incorporate effective domain modeling into the software development process."
    },
    {
      "name": "Building Micro-service",
      "id": 3,
      "description": "Author Sam Newman provides you with a firm grounding in the concepts while diving into current solutions for modeling, integrating, testing, deploying, and monitoring your own autonomous services."
    },
    {
      "name": "Acceptance Test Driven Development with React",
      "id": 4,
      "description": "This book describes how to apply the Acceptance Test Driven Development when developing a Web Application named bookish with React / Redux and other tools in react ecosystem."
    }
  ]

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

  it('Show a book list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('div[data-test="book-list"]').should('exist')
    cy.wait(1)
    cy.get('div.book-item').should((books) => {
      expect(books).to.have.length(4)

      const titiles = [...books].map(x => x.querySelector('h2').innerHTML)
      expect(titiles).to.deep.equal(['Refactoring', 'Domain-driven design', 'Building Micro-service', 'Acceptance Test Driven Development with React'])
    })
  })

  it('Goes to the detail page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('div.book-item').contains('View Details').eq(0).click()

    cy.url().should('include', '/books/1')
    cy.get('h2.book-title').contains('Refactoring')
  })

  it('Searches for a title', () => {
    cy.visit('http://localhost:3000/')
    cy.get('div.book-item').should('have.length', 4)

    cy.get('div[data-test="search"]').type('design')
    cy.get('div.book-item').should('have.length', 1)
    cy.get('div.book-item').eq(0).contains('Domain-driven design')
  })
})
