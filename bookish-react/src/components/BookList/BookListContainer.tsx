import { useBookList } from "./BookList.hooks"
import BookList from "./BookList"
import { TextField } from "@material-ui/core"
import { useState } from "react"

const BookListContainer = () => {
  const [term, setTerm] = useState('')
  const { books, loading, error } = useBookList([], term)

  return (
    <>
      <TextField
        label='Search'
        data-test='search'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        margin='normal'
        variant='outlined'
      />
      <BookList books={books} loading={loading} error={error} />
    </>
  )
}

export default BookListContainer
