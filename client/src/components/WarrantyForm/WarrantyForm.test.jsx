import { render, screen } from '@testing-library/react'
import WarrantyForm from './WarrantyForm.jsx'

describe('WarrantyForm', () => {
  it('renders the App component', () => {
    render(<WarrantyForm />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})

