import { render, screen } from '@testing-library/react'
import Ourstore from './OurStore.jsx'

describe('Ourstore', () => {
  it('renders the App component', () => {
    render(<Ourstore />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})

