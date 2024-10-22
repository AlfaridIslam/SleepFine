import { render, screen } from '@testing-library/react'
import Counter from './Counter.jsx'

describe('App', () => {
  it('renders the App component', () => {
    render(<Counter />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})