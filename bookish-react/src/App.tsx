import Typography from '@material-ui/core/Typography'
import BookList, { Book } from './components/BookList'
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

const App = () => {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    const fetchBooks = async () => {
      const res: AxiosResponse<Book[]> = await axios.get('http://localhost:8080/books')
      setBooks(res.data)
    }

    fetchBooks()
  }, [])

  return (
    <div className='App'>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <BookList books={books} />
    </div >
  )
}

export default App
