import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../../components/Book/BookDetail";
import { failed, fetched, loaded } from "./bookActions";

export type BookState = { loading: boolean, books: Book[], term: string }
export const initialState: BookState = {
  loading: false,
  books: [],
  term: ''
}

export const bookReducer = createReducer(initialState, {
  [fetched.type]: (state, action: PayloadAction<Book[]>) => ({
    ...state,
    books: action.payload
  }),
  [loaded.type]: (state) => ({ ...state, loading: true }),
  [failed.type]: () => ({ ...initialState })
})

export default bookReducer

