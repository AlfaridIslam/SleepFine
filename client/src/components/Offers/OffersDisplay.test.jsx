import { render, screen } from '@testing-library/react'
import OfferDisplay from './OffersDisplay.jsx'

describe('OfferDisplay', () => {
  it('renders the App component', () => {
    render(<OfferDisplay/>)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})