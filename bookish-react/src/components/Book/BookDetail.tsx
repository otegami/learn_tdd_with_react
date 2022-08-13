import BookList from "../BookList/BookList"

export type Book = {
  id: number
  name: string
  description: string | undefined
}

type Props = {
  book: Book
  loading: boolean
  error: boolean
}

const BookDetail: React.FC<Props> = ({ book, loading, error }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <>
      <h2 className="book-title">{book.name}</h2>
      <p className="book-description" data-testid="book-description">
        {book.description ?? book.name}
      </p>
    </>
  )
}

export default BookDetail
