import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import SearchBox from './SearchBox'
import userEvent from '@testing-library/user-event'

describe('SearchBox', () => {
  it('redner input', async () => {
    const props = {
      term: '',
      onSearch: jest.fn()
    }

    render(<SearchBox {...props} />)
    const inputElement = await screen.findByRole('textbox')
    userEvent.type(inputElement, 'domain')

    expect(props.onSearch).toHaveBeenCalled()
  })

  it('trim empty strings', async () => {
    const props = {
      term: '',
      onSearch: jest.fn()
    }

    render(<SearchBox {...props} />)
    const inputElement = await screen.findByRole('textbox')
    userEvent.type(inputElement, '     ')

    expect(props.onSearch).not.toHaveBeenCalled()
  })
})
