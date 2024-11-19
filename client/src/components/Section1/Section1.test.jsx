import { render, screen } from '@testing-library/react'
import Section1 from './Section1.jsx'

describe('Section1', () => {
  it('renders the App component', () => {
    render(<Section1 />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})