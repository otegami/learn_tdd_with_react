import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../BookList/BookList";

const BookDetailContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [book, setBook] = useState<Book>({ id: 0, name: '' })

  useEffect(() => {
    if (!id) return
    const fetchBook = async () => {
      const book = await axios.get(`http://localhost:8080/books/${id}`)
      setBook(book.data)
    }

    fetchBook()
  }, [id])

  return (
    <h2 className="book-title">{book.name}</h2>
  )
}

export default BookDetailContainer
