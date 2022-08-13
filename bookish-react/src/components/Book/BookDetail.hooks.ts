import axios from "axios"
import { useEffect, useState } from "react"
import { Book } from "../Book/BookDetail"

export const useBook = (id: string | undefined) => {
  const [book, setBook] = useState<Book>({ id: 0, name: '', description: '' })
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    if (!id) return

    const fetchBook = async (id: string) => {
      setError(false)
      setLoading(true)

      try {
        const { data } = await axios.get(`http://localhost:8080/books/${id}`)
        setBook(data)
      } catch (e: unknown) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchBook(id)
  }, [id])

  return { book, loading, error }
}
