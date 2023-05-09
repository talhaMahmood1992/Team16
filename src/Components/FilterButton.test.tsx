import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { FilterButton, FilterProps } from "./FilterButton";
import { Media } from "../Interfaces";
import "@testing-library/jest-dom/extend-expect";

const mockMediaData: Media[] = [
    {
        title: "2001 A Space Odyssey",
        type: "Movie",
        yearReleased: 1968,
        rating: 5,
        image: "",
        genres: ["Adventure", "Drama", "Science Fiction", "Thriller"],
        _id: "1"
    },
    {
        title: "Apocalypse Now",
        type: "Movie",
        yearReleased: 1979,
        rating: 5,
        image: "",
        genres: ["Adventure", "History", "Thriller"],
        _id: "2"
    }
];

const mockFilterProps: FilterProps = {
    MediaData: mockMediaData,
    onFilter: jest.fn()
};

describe("FilterButton component", () => {
    it("should render properly", () => {
        const { getByText } = render(<FilterButton {...mockFilterProps} />);
        expect(getByText("Sort Media")).toBeInTheDocument();
    });

    // it("should call onFilter with unsorted media data when 'Sort Media' is clicked", () => {
    //     const { getByText } = render(<FilterButton {...mockFilterProps} />);
    //     fireEvent.click(getByText("Sort Media"));
    //     expect(mockFilterProps.onFilter).toHaveBeenCalledWith(mockMediaData);
    // });

    it("should call onFilter with media data sorted alphabetically when 'Alphabetically' is clicked", () => {
        const { getByText } = render(<FilterButton {...mockFilterProps} />);
        fireEvent.click(getByText("Sort Media"));
        fireEvent.click(getByText("Alphabetically"));
        expect(mockFilterProps.onFilter).toHaveBeenCalledWith(
            mockMediaData.sort((a, b) => a.title.localeCompare(b.title))
        );
    });

    it("should call onFilter with media data sorted high to low when 'High to Low Ratings' is clicked", () => {
        const { getByText } = render(<FilterButton {...mockFilterProps} />);
        fireEvent.click(getByText("Sort Media"));
        fireEvent.click(getByText("High to Low Ratings"));
        expect(mockFilterProps.onFilter).toHaveBeenCalledWith(
            mockMediaData.sort((a, b) => b.rating - a.rating)
        );
    });

    it("should call onFilter with media data sorted low to high when 'Low to High Ratings' is clicked", () => {
        const { getByText } = render(<FilterButton {...mockFilterProps} />);
        fireEvent.click(getByText("Sort Media"));
        fireEvent.click(getByText("Low to High Ratings"));
        expect(mockFilterProps.onFilter).toHaveBeenCalledWith(
            mockMediaData.sort((a, b) => a.rating - b.rating)
        );
    });

    it("should call onFilter with filtered media data when 'Show' is clicked", () => {
        const { getByText } = render(<FilterButton {...mockFilterProps} />);
        fireEvent.click(getByText("Sort Media"));
        fireEvent.click(getByText("Show"));
        expect(mockFilterProps.onFilter).toHaveBeenCalledWith(
            mockMediaData.filter((media) => media.type === "Show")
        );
    });

    it("should call onFilter with filtered media data when 'Movie' is clicked", () => {
        const { getByText } = render(<FilterButton {...mockFilterProps} />);
        fireEvent.click(getByText("Sort Media"));
        fireEvent.click(getByText("Movie"));
        expect(mockFilterProps.onFilter).toHaveBeenCalledWith(
            mockMediaData.filter((media) => media.type === "Movie")
        );
    });
});
