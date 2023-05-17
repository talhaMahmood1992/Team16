import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { SearchBar } from "../Components/SearchAndFilter/SearchBar";
import "@testing-library/jest-dom/extend-expect";

test("renders SearchBar without errors", () => {
    const setSearchQuery = jest.fn();
    render(<SearchBar setSearchQuery={setSearchQuery} />);
});

test("displays search input correctly", () => {
    const setSearchQuery = jest.fn();
    const { getByPlaceholderText } = render(
        <SearchBar setSearchQuery={setSearchQuery} />
    );
    const searchInput = getByPlaceholderText("Search Media");
    expect(searchInput).toBeInTheDocument();
});

test("displays search icon correctly", () => {
    const setSearchQuery = jest.fn();
    const { getByTestId } = render(
        <SearchBar setSearchQuery={setSearchQuery} />
    );
    const searchIcon = getByTestId("search-icon");
    expect(searchIcon).toBeInTheDocument();
});

test("search input changes when the user types", () => {
    const setSearchQuery = jest.fn();
    const { getByPlaceholderText } = render(
        <SearchBar setSearchQuery={setSearchQuery} />
    );
    const searchInput = getByPlaceholderText(
        "Search Media"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
});

test("search query is set correctly when the user types", () => {
    const setSearchQuery = jest.fn();
    const { getByPlaceholderText } = render(
        <SearchBar setSearchQuery={setSearchQuery} />
    );
    const searchInput = getByPlaceholderText(
        "Search Media"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(setSearchQuery).toHaveBeenCalledWith("?search=test");
});

test("search query is cleared when the search input is empty", () => {
    const setSearchQuery = jest.fn();
    const { getByPlaceholderText } = render(
        <SearchBar setSearchQuery={setSearchQuery} />
    );
    const searchInput = getByPlaceholderText(
        "Search Media"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(setSearchQuery).toHaveBeenCalledWith("?search=test");
    fireEvent.change(searchInput, { target: { value: "" } });
    expect(setSearchQuery).toHaveBeenCalledWith("");
});
