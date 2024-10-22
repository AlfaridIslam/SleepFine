import { render, screen } from '@testing-library/react'
import WarrantyForm2 from './WarrantyForm2.jsx'

describe('WarrantyForm2', () => {
  it('renders the App component', () => {
    render(<WarrantyForm2 />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})

