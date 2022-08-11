import Typography from '@material-ui/core/Typography'
import BookListContainer from './components/BookList/BookListContainer'

const App = () => {
  return (
    <div className='App'>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <BookListContainer />
    </div >
  )
}

export default App
