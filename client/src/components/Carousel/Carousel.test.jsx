import { render, screen } from '@testing-library/react'
import Carousel from './Carousel.jsx'

describe('Carousel', () => {
  it('renders the App component', () => {
    render(<Carousel />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})

