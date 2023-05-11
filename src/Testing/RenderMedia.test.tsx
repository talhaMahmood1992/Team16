import React from "react";
import { render, screen } from "@testing-library/react";
import RenderMedia from "../Components/RenderMedia";

import { Media } from "../Interfaces";
import "@testing-library/jest-dom/extend-expect";

describe("RenderMedia", () => {
    const mediaList: Media[] = [
        {
            title: "Fight Club",
            type: "Movie",
            yearReleased: 1999,
            rating: 4,
            image: require("../imgs/media-covers/fight-club.jpg"),
            genres: ["Action", "Crime", "Drama", "Mystery", "Thriller"],
            _id: "1"
        },
        {
            title: "Drive",
            type: "Movie",
            yearReleased: 2011,
            rating: 3,
            image: require("../imgs/media-covers/drive.jpg"),
            genres: ["Action", "Crime", "Drama", "Thriller"],
            _id: "2"
        }
    ];

    beforeEach(() => {
        render(<RenderMedia MediaData={mediaList} />);
    });
    test("renders media item image", () => {
        const images = screen.getAllByRole("img");
        expect(images.length).toBe(mediaList.length);
    });

    test("renders media list container", () => {
        const container = screen.getByTestId("mediaListContainer");
        expect(container).toBeInTheDocument();
    });

    test("renders media items", () => {
        const mediaItems = screen.getAllByTestId("mediaItem");
        expect(mediaItems.length).toBe(mediaList.length);
    });

    test("renders media item year", () => {
        const years = screen.getAllByTestId("mediaYear");
        mediaList.forEach((media, index) => {
            expect(years[index]).toHaveTextContent(
                media.yearReleased.toString()
            );
        });
    });
    test("renders all media items", () => {
        const mediaItems = screen.getAllByTestId("mediaItem");
        expect(mediaItems.length).toBe(mediaList.length);
    });
});
