import { render, screen } from '@testing-library/react'
import ProductSubItems from './ProductSubitems.jsx'

describe('ProductSubitems', () => {
  it('renders the App component', () => {
    render(<ProductSubItems/>)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})