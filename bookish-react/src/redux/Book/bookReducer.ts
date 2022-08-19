import { Book } from "../../components/Book/BookDetail";
import { FETCH_BOOKS_PENDING, FETCH_BOOKS_SUCCESS } from "./bookTypes";

export type PendingAction = { type: typeof FETCH_BOOKS_PENDING }
export type SucessAction = { type: typeof FETCH_BOOKS_SUCCESS, books: Book[] }
type Actions = PendingAction | SucessAction

export type State = { loading: boolean, books: Book[], term: string }
export const initState: State = {
  loading: false,
  books: [],
  term: ''
}
const bookReducer = (state = initState, action: Actions): State => {
  switch (action.type) {
    case FETCH_BOOKS_PENDING:
      return { ...state, loading: true }
    case FETCH_BOOKS_SUCCESS:
      return { ...state, books: action.books, loading: false }
    default:
      return state
  }
}

export default bookReducer
