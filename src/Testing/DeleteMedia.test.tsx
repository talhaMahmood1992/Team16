import React from "react";
import { render, screen } from "@testing-library/react";
import { DeleteMedia } from "../Components/DeleteMedia";
import { MediaInterface } from "../interfaces/MediaInterface";
import "@testing-library/jest-dom/extend-expect";

describe("DeleteMedia", () => {
    const mockToWatch: MediaInterface[] = [
        {
            _id: "1",
            mediaId: "2",
            title: "MovieA",
            type: "Movie",
            yearReleased: 2021,
            rating: 4.5,
            image: "example.jpg",
            genres: ["Action", "Adventure"]
        }
    ];

    const mockWatched: MediaInterface[] = [
        {
            _id: "1",
            mediaId: "2",
            title: "MovieA",
            type: "Movie",
            yearReleased: 2021,
            rating: 4.5,
            image: "example.jpg",
            genres: ["Action", "Adventure"]
        }
    ];
    test("should render the header container", () => {
        render(
            <DeleteMedia
                toWatch={mockToWatch}
                watched={mockWatched}
                setToWatch={() => {
                    jest.fn();
                }}
                setWatched={() => {
                    jest.fn();
                }}
            />
        );

        const headerContainer = screen.getByTestId("headerContainer");
        expect(headerContainer).toBeInTheDocument();
    });

    test("should render the trash icon", () => {
        render(
            <DeleteMedia
                toWatch={mockToWatch}
                watched={mockWatched}
                setToWatch={() => {
                    jest.fn();
                }}
                setWatched={() => {
                    jest.fn();
                }}
            />
        );

        const trashIcon = screen.getAllByTestId("trash-can");
        expect(trashIcon).toHaveLength(1);
    });

    test("should not render the trash icon if no media is present", () => {
        render(
            <DeleteMedia
                toWatch={[]}
                watched={[]}
                setToWatch={() => {
                    jest.fn();
                }}
                setWatched={() => {
                    jest.fn();
                }}
            />
        );

        const trashIcon = screen.queryByRole("img", { name: /trash/i });
        expect(trashIcon).not.toBeInTheDocument();
    });
    test("should render the DeleteMedia component", () => {
        const setToWatchMock = jest.fn();
        const setWatchedMock = jest.fn();

        render(
            <DeleteMedia
                toWatch={mockToWatch}
                watched={mockWatched}
                setToWatch={setToWatchMock}
                setWatched={setWatchedMock}
            />
        );

        const headerContainer = screen.getByTestId("headerContainer");
        expect(headerContainer).toBeInTheDocument();
    });
    test("should not render the trash icon if no media is present", () => {
        render(
            <DeleteMedia
                toWatch={[]}
                watched={[]}
                setToWatch={() => {
                    jest.fn();
                }}
                setWatched={() => {
                    jest.fn();
                }}
            />
        );

        const trashIcon = screen.queryByRole("img", { name: /trash/i });
        expect(trashIcon).not.toBeInTheDocument();
    });
    test("should render the DeleteMedia component", () => {
        const setToWatchMock = jest.fn();
        const setWatchedMock = jest.fn();

        render(
            <DeleteMedia
                toWatch={mockToWatch}
                watched={mockWatched}
                setToWatch={setToWatchMock}
                setWatched={setWatchedMock}
            />
        );

        const headerContainer = screen.getByTestId("Trash");
        expect(headerContainer).toBeInTheDocument();
    });
});
