import { Book } from "../../components/Book/BookDetail"
import { FETCH_BOOKS_PENDING, FETCH_BOOKS_SUCCESS } from "./bookTypes"
import bookReducer, { PendingAction, SucessAction } from "./bookReducer"

describe('bookReducer', () => {
  it('Show loading when request is sent', () => {
    const initState = { loading: false, books: [] }
    const action: PendingAction = { type: FETCH_BOOKS_PENDING }
    const state = bookReducer(initState, action)

    expect(state.loading).toBeTruthy()
  })

  it('Add books to state when request successful', () => {
    const books: Book[] = [
      { id: 1, name: 'Refactoring', description: '' },
      { id: 2, name: 'Domain-driven design', description: '' }
    ]
    const action: SucessAction = {
      type: FETCH_BOOKS_SUCCESS,
      books
    }

    const state = bookReducer({ loading: false, books: [] }, action)

    expect(state.books).toBe(books)
  })
})
