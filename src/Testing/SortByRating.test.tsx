/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SortByRating } from "../Components/SortByRating/SortByRating";

describe("SortByRating", () => {
    it("should render the SortByRating component", () => {
        render(<SortByRating setRatingQuery={() => {}} />);
        expect(screen.getByTestId("sort-by-rating")).toBeInTheDocument();
    });

    it("should render the BasicDropdown component", () => {
        render(<SortByRating setRatingQuery={() => {}} />);
        expect(screen.getByTestId("basic-dropdown")).toBeInTheDocument();
    });

    it("should render the option 'High to Low' in the BasicDropdown component", () => {
        render(<SortByRating setRatingQuery={() => {}} />);
        expect(screen.getByText("High to Low")).toBeInTheDocument();
    });

    it("should render the option 'Low to High' in the BasicDropdown component", () => {
        render(<SortByRating setRatingQuery={() => {}} />);
        expect(screen.getByText("Low to High")).toBeInTheDocument();
    });
    it("should render properly", () => {
        render(<SortByRating setRatingQuery={() => {}} />);
        expect(screen.getByText("Rating")).toBeInTheDocument();
    });
});
