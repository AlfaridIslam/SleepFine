import { render, screen } from '@testing-library/react'
import GoToTop from './GoToTop.jsx'

describe('GoToTop', () => {
  it('renders the App component', () => {
    render(<GoToTop/>)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})