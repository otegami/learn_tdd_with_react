import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { useDispatch } from 'react-redux'
import { Book } from "../../components/Book/BookDetail"

export type BookState = { loading: boolean, books: Book[], term: string }
export const initialState: BookState = {
  loading: false,
  books: [],
  term: ''
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    fetched: (state, action: PayloadAction<Book[]>) => ({
      ...state,
      books: action.payload
    }),
    loaded: (state) => ({ ...state, loading: true }),
    failed: () => ({ ...initialState })
  }
})

const store = configureStore({ reducer: bookSlice.reducer })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
