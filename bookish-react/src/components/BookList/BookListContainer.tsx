import { useBookList } from "./BookList.hooks"
import BookList from "./BookList"
import { ChangeEvent, useState } from "react"
import SearchBox from "../SearchBox/SearchBox"

const BookListContainer = () => {
  const [term, setTerm] = useState('')
  const { books, loading, error } = useBookList([], term)
  const onSearch = (event: ChangeEvent<HTMLInputElement>) => setTerm(event.target.value)

  return (
    <>
      <SearchBox
        term={term}
        onSearch={onSearch}
      />
      <BookList books={books} loading={loading} error={error} />
    </>
  )
}

export default BookListContainer
