import { createAction } from "@reduxjs/toolkit"
import axios from "axios"
import { Book } from "../../components/Book/BookDetail"
import { FETCH_BOOKS_FAILED, FETCH_BOOKS_PENDING, FETCH_BOOKS_SUCCESS } from "./bookTypes"

export const setSearchTerm = (term: string) => {
  return { type: 'SET_SEARCH_TERM', term }
}

export const fetchBooks = (term: string) => {
  return (dispacth, getState) => {
    dispacth({ type: FETCH_BOOKS_PENDING })
    const state = getState()

    return axios.get(`http://localhost:8080/books?q=${state.term}`)
      .then((res) => {
        dispacth({ type: FETCH_BOOKS_SUCCESS, books: res.data })
      })
      .catch((err) => {
        dispacth({ type: FETCH_BOOKS_FAILED, err: err.message })
      })
  }
}

const FEATURE = 'book'
export const fetched = createAction<Book[]>(`${FEATURE}/fetched`)
export const loaded = createAction(`${FEATURE}/loaded`)
export const failed = createAction(`${FEATURE}/failed`)
