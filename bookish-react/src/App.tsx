import Typography from '@material-ui/core/Typography'
import { Route, Routes } from 'react-router-dom'
import BookDetailContainer from './components/Book/BookDetailContainer'
import BookListContainer from './components/BookList/BookListContainer'

const App = () => {
  return (
    <div className='App'>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <Routes>
        <Route path='/' element={<BookListContainer />} />
        <Route path='/books/:id' element={<BookDetailContainer />} />
      </Routes>
    </div >
  )
}

export default App
