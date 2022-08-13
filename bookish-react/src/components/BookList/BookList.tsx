import { Button, Card, CardActionArea, CardActions, CardContent, Grid, makeStyles, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import { Book } from "../Book/BookDetail"

type Props = {
  books: Book[]
  loading: boolean
  error: boolean
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  name: {
    maxHeight: 30,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  description: {
    maxHeight: 40,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}))

const BookList: React.FC<Props> = ({ books, loading, error }) => {
  const classes = useStyles()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div data-test="book-list" className={classes.root}>
      <Grid container spacing={3} >
        {
          books.map((book) => (
            <Grid item xs={4} sm={4} key={book.id} className='book-teim'>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2' className={classes.name}>
                      {book.name}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p' className={classes.description}>
                      {book.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    <Link to={`/books/${book.id}`}>View Details</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </div >
  )
}

export default BookList
