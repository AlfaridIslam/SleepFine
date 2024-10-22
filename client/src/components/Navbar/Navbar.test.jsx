import { render, screen } from '@testing-library/react'
import Navbar from './Navbar.jsx'
import { MemoryRouter } from 'react-router-dom' // Import MemoryRouter

describe('Navbar', () => {
  it('renders the Navbar component', () => {
    // Wrap the Navbar component with MemoryRouter
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
