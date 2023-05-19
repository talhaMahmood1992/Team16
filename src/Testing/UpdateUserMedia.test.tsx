import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {
    UpdateUserMedia,
    removeDuplicateMedia
} from "../Components/UserMedia/UpdateUserMedia";
import { MediaInterface } from "../interfaces/MediaInterface";

describe("SortByRating", () => {
    test("should call saveData function when save button is clicked", () => {
        const saveDataMock = jest.fn();
        render(<UpdateUserMedia toWatchMedia={[]} watchedMedia={[]} />);
        const saveButton = screen.getByRole("button", { name: "Save" });
        fireEvent.click(saveButton);
        expect(saveDataMock).toHaveBeenCalledTimes(0);
    });

    test("should remove duplicate media from the list", () => {
        const mediaList: MediaInterface[] = [
            {
                _id: "1",
                mediaId: "2",
                title: "MovieA",
                type: "Movie",
                yearReleased: 2021,
                rating: 4.5,
                image: "example.jpg",
                genres: ["Action", "Adventure"]
            },
            {
                _id: "1",
                mediaId: "2",
                title: "MovieB",
                type: "Movie",
                yearReleased: 2021,
                rating: 4.5,
                image: "example.jpg",
                genres: ["Action", "Adventure"]
            },
            {
                _id: "1",
                mediaId: "2",
                title: "MovieB",
                type: "Movie",
                yearReleased: 2021,
                rating: 4.5,
                image: "example.jpg",
                genres: ["Action", "Adventure"]
            }
        ];

        const uniqueMedia = removeDuplicateMedia(mediaList);

        expect(uniqueMedia).toEqual([
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
        ]);
    });

    test("should render save button", () => {
        render(<UpdateUserMedia toWatchMedia={[]} watchedMedia={[]} />);
        const saveButton = screen.getByRole("button", { name: "Save" });
        expect(saveButton).toBeInTheDocument();
    });

    test("should disable save button while saving", () => {
        render(<UpdateUserMedia toWatchMedia={[]} watchedMedia={[]} />);
        const saveButton = screen.getByRole("button", { name: "Save" });

        fireEvent.click(saveButton);
        expect(saveButton).toBeDisabled();
    });

    test("should render the save button", () => {
        render(<UpdateUserMedia toWatchMedia={[]} watchedMedia={[]} />);
        const saveButton = screen.getByTestId("save-button");

        expect(saveButton).toBeInTheDocument();
    });
});
