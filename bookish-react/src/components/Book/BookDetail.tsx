export type Book = {
  id: number
  name: string
  description: string
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
      <p className="book-description">{book.description}</p>
    </>
  )
}

export default BookDetail
