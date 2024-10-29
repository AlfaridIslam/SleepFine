import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { vi } from "vitest";
import { useParams } from "react-router-dom";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

const mockProductData = {
  orthomed: {
    images: [
      "https://res.cloudinary.com/dpsmbluby/image/upload/v1728565592/orthomed12_zbtuj9.jpg",
      "https://res.cloudinary.com/dpsmbluby/image/upload/v1728565592/orthomed13_tlaq5j.jpg",
      "https://res.cloudinary.com/dpsmbluby/image/upload/v1728565592/orthomed11_txipv7.jpg",
      "https://res.cloudinary.com/dpsmbluby/image/upload/v1728565798/orthomed14_owwnnf.jpg",
      "https://res.cloudinary.com/dpsmbluby/image/upload/v1729230817/Rebonded_100_Density_100mm_700_x_400_px_80_r0bhg6.jpg",
    ],
    description: "This is an orthopedic mattress for testing purposes.",
  },
};

describe("ProductDetails Component", () => {
  beforeEach(() => {
    useParams.mockReturnValue({ productType: "orthomed" });
  });

  const renderComponent = () =>
    render(
      <BrowserRouter>
        <ProductDetails productData={mockProductData} />
      </BrowserRouter>
    );

  test("renders ProductDetails component correctly", () => {
    renderComponent();

    expect(screen.getByAltText("Main product")).toBeInTheDocument();
    expect(
      screen.getByText((content, element) => {
        return element.textContent.includes(
          "orthopedic mattress for testing purposes"
        );
      })
    ).toBeInTheDocument();
  });

  test("displays the first image on initial render", () => {
    renderComponent();

    const firstImage = screen.getByAltText("Main product");
    expect(firstImage.src).toContain("orthomed12_zbtuj9.jpg");
  });

  test("navigates through images with buttons", async () => {
    renderComponent();

    const nextButton = screen.getByText("›");
    const prevButton = screen.getByText("‹");
    const mainImage = screen.getByAltText("Main product");

    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(mainImage.src).toContain("orthomed13_tlaq5j.jpg");
    });

    fireEvent.click(prevButton);
    await waitFor(() => {
      expect(mainImage.src).toContain("orthomed12_zbtuj9.jpg");
    });
  });

  test("renders the correct number of image thumbnails", () => {
    renderComponent();

    const thumbnails = screen
      .getAllByRole("img")
      .filter((img) => img.alt !== "Main product");
    expect(thumbnails).toHaveLength(mockProductData.orthomed.images.length);
  });

  test("changes the main image when thumbnail is clicked", async () => {
    renderComponent();

    const thumbnails = screen
      .getAllByRole("img")
      .filter((img) => img.alt !== "Main product");
    const mainImage = screen.getByAltText("Main product");

    fireEvent.click(thumbnails[1]);
    await waitFor(() => {
      expect(mainImage.src).toContain("orthomed13_tlaq5j.jpg");
    });
  });

  test("cycles through all images correctly", async () => {
    renderComponent();

    const nextButton = screen.getByText("›");
    const mainImage = screen.getByAltText("Main product");

    for (let i = 1; i < mockProductData.orthomed.images.length; i++) {
      fireEvent.click(nextButton);
      await waitFor(() => {
        expect(mainImage.src).toContain(
          mockProductData.orthomed.images[i].split("/").pop()
        );
      });
    }

    // Check if it cycles back to the first image
    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(mainImage.src).toContain(
        mockProductData.orthomed.images[0].split("/").pop()
      );
    });
  });
});
