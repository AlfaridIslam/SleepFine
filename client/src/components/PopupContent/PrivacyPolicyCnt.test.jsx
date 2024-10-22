import { render, screen } from '@testing-library/react'
import PrivacyPolicyCnt from './PrivacyPolicyCnt.jsx'

describe('PrivacyPolicyCnt', () => {
  it('renders the App component', () => {
    render(<PrivacyPolicyCnt />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})

