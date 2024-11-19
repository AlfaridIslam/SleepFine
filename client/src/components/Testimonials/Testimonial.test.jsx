import { render, screen } from '@testing-library/react'
import Testimonial from './Testimonial.jsx'

describe('Testimonial', () => {
  it('renders the App component', () => {
    render(<Testimonial />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})