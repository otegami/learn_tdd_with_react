import { TextField } from "@material-ui/core"
import { ChangeEvent } from "react"

type Props = {
  term: string
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchBox: React.FC<Props> = ({ term, onSearch }) => {
  const isEmpty = (str: string) => str === ''
  const handleOnSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if (!(isEmpty(value.trim()))) {
      return onSearch(event)
    }
  }

  return (
    <TextField
      label='Search'
      value={term}
      data-test='search'
      onChange={handleOnSearch}
      margin='normal'
      variant='outlined'
    />
  )
}

export default SearchBox
