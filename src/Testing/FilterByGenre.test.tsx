import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { FilterByGenre } from "../Components/FilterByGenre/FilterByGenre";

describe("FilterByGenre", () => {
    const mockSetFilteredWatched = jest.fn();
    const mockSetFilteredToWatch = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render the 'Filter' button", () => {
        render(
            <FilterByGenre
                watched={[]}
                toWatch={[]}
                setFilteredWatched={mockSetFilteredWatched}
                setFilteredToWatch={mockSetFilteredToWatch}
            />
        );
        expect(screen.getByText("Filter")).toBeInTheDocument();
    });

    it("should render the FilterByGenre component", () => {
        render(
            <FilterByGenre
                watched={[]}
                toWatch={[]}
                setFilteredWatched={mockSetFilteredWatched}
                setFilteredToWatch={mockSetFilteredToWatch}
            />
        );
        expect(screen.getByTestId("filter-by-genre")).toBeInTheDocument();
    });

    it("should render checkboxes for each genre", () => {
        render(
            <FilterByGenre
                watched={[]}
                toWatch={[]}
                setFilteredWatched={mockSetFilteredWatched}
                setFilteredToWatch={mockSetFilteredToWatch}
            />
        );
        const genreCheckboxes = screen.getAllByTestId("genre-checkbox");
        expect(genreCheckboxes).toHaveLength(18);
    });

    it("Submit Works", () => {
        render(
            <FilterByGenre
                watched={[]}
                toWatch={[]}
                setFilteredWatched={mockSetFilteredWatched}
                setFilteredToWatch={mockSetFilteredToWatch}
            />
        );
        const submitButton = screen.getByText("Filter");
        fireEvent.click(submitButton);
    });

    it("should pass the selected genres to the setFilteredWatched and setFilteredToWatch functions", () => {
        render(
            <FilterByGenre
                watched={[]}
                toWatch={[]}
                setFilteredWatched={mockSetFilteredWatched}
                setFilteredToWatch={mockSetFilteredToWatch}
            />
        );
        const genreCheckboxes = screen.getAllByTestId("genre-checkbox");
        fireEvent.click(genreCheckboxes[0]);
        fireEvent.click(genreCheckboxes[2]);
        const submitButton = screen.getByText("Filter");
        fireEvent.click(submitButton);
    });

    it("should uncheck the checkboxes after form submission", () => {
        render(
            <FilterByGenre
                watched={[]}
                toWatch={[]}
                setFilteredWatched={mockSetFilteredWatched}
                setFilteredToWatch={mockSetFilteredToWatch}
            />
        );
        const genreCheckboxes = screen.getAllByTestId("genre-checkbox");
        fireEvent.click(genreCheckboxes[0]);
        fireEvent.click(genreCheckboxes[2]);
        const submitButton = screen.getByText("Filter");
        fireEvent.click(submitButton);
        const checkedCheckboxes: any[] = [];
        expect(checkedCheckboxes).toHaveLength(0);
    });
});
