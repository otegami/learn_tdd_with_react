import Typography from '@material-ui/core/Typography'
import BookList from './components/BookList'

const App = () => {
  const books = [
    { name: "Refactoring" },
    { name: "Domain-driven design" }
  ]

  return (
    <div className='App'>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <BookList books={books} />
    </div >
  )
}

export default App;
