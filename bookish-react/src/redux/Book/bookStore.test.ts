import axios from "axios"
import { Book } from "../../components/Book/BookDetail"
import { fetchBooks } from "./bookActions"
import bookStore from "./bookStore"

describe('bookStore', () => {
  const books: Book[] = [{ id: 1, name: 'Refactoring', description: '' }]

  it('Fetch Books from remote', () => {
    axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: books }))

    return bookStore.dispatch(fetchBooks())
      .then(() => {
        const state = bookStore.getState()
        expect(state.books.length).toEqual(1)
        expect(state.books).toEqual(books)
      })
  })
})
