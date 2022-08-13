import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import BookDetail from './BookDetail'

describe('BookDetail', () => {
  it('renders book detail', async () => {
    const props = {
      book: {
        id: 1,
        name: 'Reafactoring',
        description: "Martin Fowler's Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software."
      },
      loading: false,
      error: false
    }

    render(<BookDetail {...props} />)

    const title = await screen.findByText(/Reafactoring/)
    const description = await screen.findByText(/Martin Fowler's Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software./)

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('displays the book name when no description was given', async () => {
    const props = {
      book: {
        id: 1,
        name: 'Refactoring',
        description: undefined
      },
      loading: false,
      error: false,
    }

    render(<BookDetail {...props} />)
    const descriptionElement = await screen.findByTestId('book-description')
    expect(descriptionElement).toBeInTheDocument()
  })
})
