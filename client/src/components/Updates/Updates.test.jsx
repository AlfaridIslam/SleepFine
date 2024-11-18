import { render, screen } from '@testing-library/react';
import { Updates } from './Updates.jsx';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter

describe('Updates', () => {
  it('renders the Updates component', () => {
    render(
      <MemoryRouter>
        <Updates />
      </MemoryRouter>
    ); // Wrap Updates in MemoryRouter

    screen.debug(); // Prints out the JSX in the Updates component to the command line
  });
});
