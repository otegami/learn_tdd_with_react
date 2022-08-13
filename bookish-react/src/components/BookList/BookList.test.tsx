import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import BookList from './BookList'

describe('BookList', () => {
  it('loading', async () => {
    const props = { books: [], loading: true, error: false }

    render(<BookList {...props} />)

    const loadingElement = await screen.findByText(/Loading.../)
    expect(loadingElement).toBeInTheDocument()
  })

  it('error', async () => {
    const props = { books: [], loading: false, error: true }

    render(<BookList {...props} />)

    const errorElement = await screen.findByText(/Error!/)
    expect(errorElement).toBeInTheDocument()
  })

  it('render books', async () => {
    const props = {
      books: [
        { 'name': 'Refactoring', 'description': 'good content', 'id': 1 },
        { 'name': 'Domain-driven design', 'description': 'good content', 'id': 2 }
      ],
      loading: false,
      error: false
    }

    render(<BookList {...props} />)
    const titleElements = [
      await screen.findByText(/Refactoring/),
      await screen.findByText(/Domain-driven design/)
    ]

    titleElements.forEach((titleElement) => {
      expect(titleElement).toBeInTheDocument()
    })
  })
})
