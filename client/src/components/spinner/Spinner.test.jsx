import { render, screen } from '@testing-library/react'
import Spinner from './Spinner.jsx'

describe('Spinner', () => {
  it('renders the App component', () => {
    render(<Spinner />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})

