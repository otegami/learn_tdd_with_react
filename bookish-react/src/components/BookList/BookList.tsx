export type Book = {
  id: number
  name: string
}

type Props = {
  books: Book[]
  loading: boolean
  error: boolean
}

const BookList: React.FC<Props> = ({ books, loading, error }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div data-test="book-list">
      {books.map((book) => (
        <div className="book-item" key={book.id}>
          <h2 className="title">{book.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default BookList
