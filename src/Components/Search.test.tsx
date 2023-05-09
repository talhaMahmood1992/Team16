/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { SearchBar } from "./Search";
import "@testing-library/jest-dom/extend-expect";
import { Media } from "../Interfaces";
const mockMediaData: Media[] = [
    {
        title: "2001 A Space Odyssey",
        type: "Movie",
        yearReleased: 1968,
        rating: 5,
        image: "./imgs/media-covers/2001_a_space_odyssey.jpg",
        genres: ["Adventure", "Drama", "Science Fiction", "Thriller"],
        _id: "1"
    },
    {
        title: "Apocalypse Now",
        type: "Movie",
        yearReleased: 1979,
        rating: 5,
        image: "./imgs/media-covers/Apocalypse_Now.jpg",
        genres: ["Adventure", "History", "Thriller"],
        _id: "2"
    },
    {
        title: "Citizen Kane",
        type: "Movie",
        yearReleased: 1941,
        rating: 5,
        image: "./imgs/media-covers/citizen_kane.jpg",
        genres: ["Drama", "Mystery"],
        _id: "3"
    }
];

test("renders SearchBar without errors", () => {
    render(<SearchBar MediaData={[]} onSearch={() => {}} />);
});

test("displays search input correctly", () => {
    const { getByPlaceholderText } = render(
        <SearchBar MediaData={[]} onSearch={() => {}} />
    );
    const searchInput = getByPlaceholderText("Search Media");
    expect(searchInput).toBeInTheDocument();
});

test("displays search icon correctly", () => {
    const { getByTestId } = render(
        <SearchBar MediaData={[]} onSearch={() => {}} />
    );
    const searchIcon = getByTestId("search-icon");
    expect(searchIcon).toBeInTheDocument();
});
test("search input changes when the user types", () => {
    const { getByPlaceholderText } = render(
        <SearchBar MediaData={[]} onSearch={() => {}} />
    );
    const searchInput = getByPlaceholderText(
        "Search Media"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
});
test("handleSearch function is called when the user types", () => {
    const mockHandleSearch = jest.fn();
    const { getByPlaceholderText } = render(
        <SearchBar MediaData={[]} onSearch={mockHandleSearch} />
    );
    const searchInput = getByPlaceholderText("Search Media");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(mockHandleSearch).toHaveBeenCalledTimes(1);
});
test("search input updates correctly", () => {
    const handleSearchMock = jest.fn();
    const { getByPlaceholderText } = render(
        <SearchBar MediaData={mockMediaData} onSearch={handleSearchMock} />
    );
    const searchInput = getByPlaceholderText(
        "Search Media"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
});
