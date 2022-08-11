import { useBookList } from "./BookList.hooks"
import BookList from "./BookList"

const BookListContainer = () => {
  const { books, loading, error } = useBookList([])

  return <BookList books={books} loading={loading} error={error} />
}

export default BookListContainer
