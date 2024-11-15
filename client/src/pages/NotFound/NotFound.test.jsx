

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound.jsx';

describe('NotFound', () => {
  it('renders the NotFound component', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    // Optional: add assertions to verify the content
    expect(screen.getByText(/404 - Page Not Found/i)).toBeInTheDocument();
    expect(screen.getByText(/Sorry, the page you're looking for doesn't exist/i)).toBeInTheDocument();
    expect(screen.getByText(/Go back to the Homepage/i)).toBeInTheDocument();
  });
});


