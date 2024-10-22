import { render, screen } from '@testing-library/react'
import TermsConditionCnt from './PrivacyPolicyCnt.jsx'

describe('TermsConditionCnt', () => {
  it('renders the App component', () => {
    render(<TermsConditionCnt />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})

