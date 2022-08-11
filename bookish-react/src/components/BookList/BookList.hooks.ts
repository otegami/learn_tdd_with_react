import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import type { Book } from './BookList'

export const useBookList = (initial: Book[]) => {
  const [books, setBooks] = useState<Book[]>(initial)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchBooks = async () => {
      setError(false)
      setLoading(true)

      try {
        const res: AxiosResponse<Book[], unknown> = await axios('http://localhost:8080/books?_sort=id&_order=asc')
        setBooks(res.data)
      } catch (e) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [])

  return { books, loading, error }
}
