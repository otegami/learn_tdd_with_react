import axios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { FETCH_BOOKS_FAILED, FETCH_BOOKS_PENDING, FETCH_BOOKS_SUCCESS } from './bookTypes'
import { fetchBooks, setSearchTerm } from "./bookActions"
import { State } from './bookReducer'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('BookListContainer related actions', () => {
  it('Sets the search keyword', () => {
    const term = ''
    const expected = {
      type: 'SET_SEARCH_TERM',
      term
    }

    const action = setSearchTerm(term)
    expect(action).toEqual(expected)
  })

  it('Fetch data successfully', () => {
    const books = [
      { id: 1, name: 'Reafactoring' },
      { id: 2, name: 'Domain-driven design' }
    ]
    axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: books }))

    const expectedActions = [
      { type: FETCH_BOOKS_PENDING },
      { type: FETCH_BOOKS_SUCCESS, books }
    ]
    const store = mockStore({ books: [] })

    return store.dispatch(fetchBooks('')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('Fetch data with error', () => {
    axios.get = jest.fn().mockImplementation(() => Promise.reject({ message: 'Something went wrong' }))

    const expectedActions = [
      { type: FETCH_BOOKS_PENDING },
      { type: FETCH_BOOKS_FAILED, err: 'Something went wrong' }
    ]

    const store = mockStore({ books: [] })
    return store.dispatch(fetchBooks('')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('Search data with term', () => {
    const books = [
      { id: 1, name: 'Refactoring' },
      { id: 2, name: 'Domain-driven design' }
    ]
    axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: books }))

    const store = mockStore({ books: [] })

    return store.dispatch(fetchBooks('domain')).then(() => {
      expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/books?q=domain')
    })
  })

  it('Performs a search', () => {
    const books = [
      { id: 1, name: 'Refactoring' },
      { id: 2, name: 'Domain-driven design' }
    ]

    axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: books }))
    const initState: State = { books: [], term: '', loading: false }
    const store = mockStore(initState)
    store.dispatch(setSearchTerm('domain'))

    return store.dispatch(fetchBooks())
      .then(() => {
        const state = store.getState()
        expect(state.term).toEqual('domain')
        expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/books?q=domain')
      })
  })
})
