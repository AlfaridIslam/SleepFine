import { render, screen } from '@testing-library/react'
import Mattress from './Mattress.jsx'

describe('Mattress', () => {
  it('renders the App component', () => {
    render(<Mattress />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})