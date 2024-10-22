import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Footer from './Footer.jsx';

describe('Footer', () => {
  it('renders the Footer component', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    
    screen.debug(); // prints out the JSX in the Footer component unto the command line
  });
});
