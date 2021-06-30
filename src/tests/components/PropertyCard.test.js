import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("Property Card", () => {
  const validProps = {
    title: "Beautiful Flat",
    propertyId: "",
    userId: "1234",
    myProperties: [],
    favouriteId: "",
    type: "Detached",
    bedrooms: 1,
    bathrooms: 1,
    price: 125000,
    city: "Sheffield",
    email: "JoeBloggs@test.com",
    onSaveProperty: () => {},
    userID: "1234",
    key: "1234",
  };

  describe("Property Card renders items based on props", () => {
    beforeEach(() => render(<PropertyCard {...validProps} />));

    test("title", () => {
      expect(screen.getByText(/Beautiful Flat/i)).toBeInTheDocument();
    });
    test("type", () => {
      expect(screen.getByText(/Detached/)).toBeInTheDocument();
    });
    test("price", () => {
      expect(screen.getByText(/125000/)).toBeInTheDocument();
    });

    test("city", () => {
      expect(screen.getByText(/Sheffield/i)).toBeInTheDocument();
    });
  });
});
