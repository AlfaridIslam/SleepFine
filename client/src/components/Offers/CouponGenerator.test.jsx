import { render, screen } from '@testing-library/react'
import CouponGenerator from './CouponGenerator'

describe('CouponGenerato', () => {
  it('renders the App component', () => {
    render(<CouponGenerator />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})