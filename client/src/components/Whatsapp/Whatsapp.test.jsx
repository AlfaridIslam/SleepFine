import { render, screen } from '@testing-library/react'
import Whatsapp from './Whatsapp.jsx'

describe('Whatsapp', () => {
  it('renders the App component', () => {
    render(<Whatsapp />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})

