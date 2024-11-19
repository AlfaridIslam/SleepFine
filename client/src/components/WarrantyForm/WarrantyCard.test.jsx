import { render, screen } from '@testing-library/react';
import WarrantyCard from './WarrantyCard';

describe('WarrantyCard', () => {
  const mockData = {
    customerName: 'John Doe',
    address: '123 Main St',
    mobileNumber: '123-456-7890',
    // Include other fields that WarrantyCard expects
  };

  it('renders the WarrantyCard component with data', () => {
    render(<WarrantyCard data={mockData} />);

    screen.debug(); // prints out the jsx in the App component unto the command line

    expect(screen.getByText(/Name:\s*John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Address:\s*123 Main St/i)).toBeInTheDocument();
    expect(screen.getByText(/Mobile:\s*123-456-7890/i)).toBeInTheDocument();
  });
});


