import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {
    FilterButton,
    FilterProps
} from "../Components/SearchAndFilter/FilterButton";

describe("FilterButton component", () => {
    const setSearchQueryMock = jest.fn();

    const mockFilterProps: FilterProps = {
        setSearchQuery: setSearchQueryMock
    };

    it("should render properly", () => {
        const { getByText } = render(<FilterButton {...mockFilterProps} />);
        expect(getByText("Sort Media")).toBeInTheDocument();
    });

    it("should call setSearchQuery with the correct query string when 'Alphabetically' is clicked", () => {
        const { getByText } = render(<FilterButton {...mockFilterProps} />);
        fireEvent.click(getByText("Sort Media"));
        fireEvent.click(getByText("Alphabetically"));
        expect(setSearchQueryMock).toHaveBeenCalledWith("?sort=title");
    });

    it("should call setSearchQuery with the correct query string when 'High to Low Ratings' is clicked", () => {
        const { getByText } = render(<FilterButton {...mockFilterProps} />);
        fireEvent.click(getByText("Sort Media"));
        fireEvent.click(getByText("High to Low Ratings"));
        expect(setSearchQueryMock).toHaveBeenCalledWith("?sort=-rating");
    });

    it("should call setSearchQuery with the correct query string when 'Low to High Ratings' is clicked", () => {
        const { getByText } = render(<FilterButton {...mockFilterProps} />);
        fireEvent.click(getByText("Sort Media"));
        fireEvent.click(getByText("Low to High Ratings"));
        expect(setSearchQueryMock).toHaveBeenCalledWith("?sort=rating");
    });

    it("should call setSearchQuery with the correct query string when 'Show' is clicked", () => {
        const { getByText } = render(<FilterButton {...mockFilterProps} />);
        fireEvent.click(getByText("Sort Media"));
        fireEvent.click(getByText("Show"));
        expect(setSearchQueryMock).toHaveBeenCalledWith("?type=Show");
    });

    it("should call setSearchQuery with the correct query string when 'Movie' is clicked", () => {
        const { getByText } = render(<FilterButton {...mockFilterProps} />);
        fireEvent.click(getByText("Sort Media"));
        fireEvent.click(getByText("Movie"));
        expect(setSearchQueryMock).toHaveBeenCalledWith("?type=Movie");
    });

    it("should call setSearchQuery with an empty string when no option is selected", () => {
        const { getByText } = render(<FilterButton {...mockFilterProps} />);
        fireEvent.click(getByText("Sort Media"));
        expect(setSearchQueryMock).toHaveBeenCalledWith("");
    });
});
