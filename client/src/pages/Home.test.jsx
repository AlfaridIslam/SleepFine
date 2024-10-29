import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { vi } from "vitest";

// Mock react-slick
vi.mock("react-slick", () => ({
  default: vi.fn().mockImplementation(({ children }) => <div>{children}</div>),
}));

// Mock all imported components
vi.mock("../components/Carousel/Carousel", () => ({
  default: () => <div>Mocked Carousel</div>,
}));
vi.mock("../components/Section1/Section1", () => ({
  default: () => <div>Mocked Section1</div>,
}));
vi.mock("../components/Testimonials/Testimonial", () => ({
  default: () => <div>Mocked Testimonial</div>,
}));
vi.mock("../components/Footer/Footer", () => ({
  default: () => <div>Mocked Footer</div>,
}));
vi.mock("../components/Updates/Updates", () => ({
  Updates: () => <div>Mocked Updates</div>,
}));
vi.mock("../components/ProductsScrolling/ProductsScrolling", () => ({
  default: () => <div>Mocked ProductsScrolling</div>,
}));
vi.mock("../components/HeroSection/HeroSection", () => ({
  default: () => <div>Mocked HeroSection</div>,
}));
vi.mock("../components/Offers/OffersDisplay", () => ({
  default: () => <div>Mocked Offersdisplay</div>,
}));

describe("Home", () => {
  it("renders the Home component", () => {
    render(<Home />);

    // Check if key components are rendered
    expect(screen.getByText("Mocked HeroSection")).toBeInTheDocument();
    expect(screen.getByText("Mocked Section1")).toBeInTheDocument();
    expect(screen.getByText("Mocked ProductsScrolling")).toBeInTheDocument();
    expect(screen.getByText("Mocked Testimonial")).toBeInTheDocument();
    expect(screen.getByText("Mocked Updates")).toBeInTheDocument();
    expect(screen.getByText("Mocked Offersdisplay")).toBeInTheDocument();
    expect(screen.getByText("Mocked Footer")).toBeInTheDocument();
  });
});
