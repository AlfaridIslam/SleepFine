import { render, screen } from '@testing-library/react'
import Accessories from './Accessories.jsx'

describe('Accessories', () => {
  it('renders the App component', () => {
    render(<Accessories />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})


