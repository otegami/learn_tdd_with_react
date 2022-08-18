import axios from "axios"
import { FETCH_BOOKS_FAILED, FETCH_BOOKS_PENDING, FETCH_BOOKS_SUCCESS } from "../types/books"

export const setSearchTerm = (term: string) => {
  return { type: 'SET_SEARCH_TERM', term }
}

export const fetchBooks = (term: string) => {
  return (dispacth) => {
    dispacth({ type: FETCH_BOOKS_PENDING })
    return axios.get(`http://localhost:8080/books?q=${term}`)
      .then((res) => {
        dispacth({ type: FETCH_BOOKS_SUCCESS, books: res.data })
      })
      .catch((err) => {
        dispacth({ type: FETCH_BOOKS_FAILED, err: err.message })
      })
  }
}
