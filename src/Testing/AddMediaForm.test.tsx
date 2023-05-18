import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AddMediaForm } from "../Components/Forms/AddMediaForm/AddMediaForm";

describe("AddMediaForm", () => {
    beforeEach(() => {
        render(<AddMediaForm />);
    });

    it("renders the media title input", () => {
        const mediaTitleInput = screen.getByTestId("media-title-input");
        expect(mediaTitleInput).toBeInTheDocument();
    });

    it("renders the year released input", () => {
        const yearReleasedInput = screen.getByTestId("year-released-input");
        expect(yearReleasedInput).toBeInTheDocument();
    });

    it("renders the rating input", () => {
        const ratingInput = screen.getByTestId("rating-input");
        expect(ratingInput).toBeInTheDocument();
    });
    it("renders the media title input", () => {
        const mediaTitleInput = screen.getByPlaceholderText("Media title...");
        expect(mediaTitleInput).toBeInTheDocument();
    });

    it("renders the year released input", () => {
        const yearReleasedInput =
            screen.getByPlaceholderText("Year Released...");
        expect(yearReleasedInput).toBeInTheDocument();
    });

    it("renders the rating input", () => {
        const ratingInput = screen.getByPlaceholderText("Rating...");
        expect(ratingInput).toBeInTheDocument();
    });
});
