import { useParams } from "react-router-dom";
import { useBook } from "./BookDetail.hooks";
import BookDetail from "./BookDetail";

const BookDetailContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { book, loading, error } = useBook(id)

  return (
    <BookDetail book={book} loading={loading} error={error} />
  )
}

export default BookDetailContainer
