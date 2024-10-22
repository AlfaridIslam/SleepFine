import { render, screen } from '@testing-library/react'
import WarrantyCnt from './WarrantyCnt.jsx'

describe('WarrantyCnt', () => {
  it('renders the App component', () => {
    render(<WarrantyCnt />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})

