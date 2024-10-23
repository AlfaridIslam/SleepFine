import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Product from './Product'

describe('Product', () => {
  it('renders the Product component', () => {
    render(
      <MemoryRouter>
        <Product />
      </MemoryRouter>
    )
    
    screen.debug(); // prints out the jsx in the Product component unto the command line
  })
})
