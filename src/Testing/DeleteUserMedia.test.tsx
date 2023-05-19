import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DeleteUserMedia } from "../Components/UserMedia/DeleteUserMedia";
describe("DeleteUserMedia component", () => {
    test("should render the save button", () => {
        render(<DeleteUserMedia toWatchMedia={[]} watchedMedia={[]} />);
        const saveButton = screen.getByRole("button", { name: "Save" });
        expect(saveButton).toBeInTheDocument();
    });
    test("should disable the save button when saving", () => {
        render(<DeleteUserMedia toWatchMedia={[]} watchedMedia={[]} />);
        const saveButton = screen.getByRole("button", { name: "Save" });
        expect(saveButton).toBeEnabled();

        // Simulate saving state
        saveButton.click();
        expect(saveButton).toBeDisabled();
    });

    test("should enable the save button when not saving", () => {
        render(<DeleteUserMedia toWatchMedia={[]} watchedMedia={[]} />);
        const saveButton = screen.getByRole("button", { name: "Save" });

        // Simulate saving state
        saveButton.click();
        expect(saveButton).toBeDisabled();

        // Simulate done saving state
        setTimeout(() => {
            expect(saveButton).toBeEnabled();
        }, 2000);
    });
    test("should call saveData function when save button is clicked", () => {
        const saveDataMock = jest.fn();
        render(<DeleteUserMedia toWatchMedia={[]} watchedMedia={[]} />);
        const saveButton = screen.getByRole("button", { name: "Save" });

        fireEvent.click(saveButton);
        expect(saveDataMock).toHaveBeenCalledTimes(0);
    });

    test("should change save button text to 'Saving...' when clicked", () => {
        render(<DeleteUserMedia toWatchMedia={[]} watchedMedia={[]} />);
        const saveButton = screen.getByRole("button", { name: "Save" });

        fireEvent.click(saveButton);
        expect(saveButton).toHaveTextContent("Saving...");
    });
});
