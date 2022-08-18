import axios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { setSearchTerm } from "./books"

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
  })
})
