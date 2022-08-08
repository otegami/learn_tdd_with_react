type Book = {
  name: string
}

const BookList: React.FC<{ books: Book[] }> = ({ books }) => {
  return (
    <div data-test="book-list">
      {books.map((book) => (
        <div className="book-item">
          <h2 className="title">{book.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default BookList
