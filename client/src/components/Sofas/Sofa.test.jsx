import { render, screen } from '@testing-library/react'
import Sofa from './Sofas.jsx'

describe('Sofa', () => {
  it('renders the App component', () => {
    render(<Sofa />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})