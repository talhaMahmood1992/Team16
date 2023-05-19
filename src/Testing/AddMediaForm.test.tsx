import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AddMediaForm } from "../Components/Forms/AddMediaForm/AddMediaForm";

describe("AddMediaForm", () => {
    beforeEach(() => {
        render(<AddMediaForm />);
    });

    it("renders the rating input", () => {
        const ratingInput = screen.getByTestId("Media-title");
        expect(ratingInput).toBeInTheDocument();
    });

    it("renders the media title input", () => {
        const mediaTitleInput = screen.getByTestId("media-genre");
        expect(mediaTitleInput).toBeInTheDocument();
    });

    it("renders the media title input", () => {
        const mediaTitleInput = screen.getByTestId("year-released-input");
        expect(mediaTitleInput).toBeInTheDocument();
    });

    it("renders the rating input", () => {
        const ratingInput = screen.getByTestId("rating-input");
        expect(ratingInput).toBeInTheDocument();
    });
    it("renders the rating input", () => {
        const ratingInput = screen.getByTestId("Rating");
        expect(ratingInput).toBeInTheDocument();
    });
});
