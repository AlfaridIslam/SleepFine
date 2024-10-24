import { render, screen } from '@testing-library/react';
import ProductTypes from './ProductTypes.jsx';

describe('ProductTypes', () => {
  const mockSubcategories = [
    {
      id: 1,
      name: 'Subcategory 1',
      image: 'https://example.com/image1.jpg',
      subitems: [],
    },
    {
      id: 2,
      name: 'Subcategory 2',
      image: 'https://example.com/image2.jpg',
      subitems: [],
    },
  ];

  it('renders the ProductTypes component', () => {
    render(<ProductTypes subcategories={mockSubcategories} />);

    // Optional: add assertions to verify the content
    expect(screen.getByText(/Product Types/i)).toBeInTheDocument();
    expect(screen.getByText(/Subcategory 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Subcategory 2/i)).toBeInTheDocument();
  });
});



