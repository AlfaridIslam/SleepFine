import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import HeroSection from './HeroSection.jsx';

describe('HeroSection', () => {
  it('renders the HeroSection component', () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    // You can add assertions here to check if specific elements are rendered
    expect(screen.getByText(/Trusted Mattress Innovators/i)).toBeInTheDocument();
    screen.debug(); // prints out the JSX in the HeroSection component to the command line
  });
});


