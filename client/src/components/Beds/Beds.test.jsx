import { render, screen } from '@testing-library/react'
import Beds from './Beds.jsx'

describe('Beds', () => {
  it('renders the App component', () => {
    render(<Beds/>)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})