import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AddUserForm } from "../Components/Forms/AddUserForm/AddUserForm";

describe("AddUserForm", () => {
    beforeEach(() => {
        render(<AddUserForm />);
    });

    it("renders the username input", () => {
        const usernameInput = screen.getByPlaceholderText(
            "Username..."
        ) as HTMLInputElement;
        expect(usernameInput).toBeInTheDocument();
    });

    it("resets the form when the Reset button is clicked", async () => {
        const usernameInput = screen.getByPlaceholderText(
            "Username..."
        ) as HTMLInputElement;
        const resetButton = screen.getByRole("button", { name: "Submit" });

        await act(async () => {
            fireEvent.change(usernameInput, { target: { value: "ME" } });
            fireEvent.click(resetButton);
        });

        expect(usernameInput.value).toBe("ME");
    });

    it("displays an error message when submitting an empty form", async () => {
        const submitButton = screen.getByRole("button", { name: "Submit" });

        await act(async () => {
            fireEvent.click(submitButton);
        });

        const errorMessage = await screen.findByText("Username is required");
        expect(errorMessage).toBeInTheDocument();
    });

    it("renders the username label", () => {
        render(<AddUserForm />);
        const usernameLabel = screen.getByLabelText("Username:");
        expect(usernameLabel).toBeInTheDocument();
    });
    it("resets the form when the Submit button is clicked", async () => {
        const usernameInput = screen.getByPlaceholderText(
            "Username..."
        ) as HTMLInputElement;
        const Submit = screen.getByRole("button", { name: "Submit" });

        await act(async () => {
            fireEvent.change(usernameInput, { target: { value: "Hello" } });
            fireEvent.click(Submit);
        });

        expect(usernameInput.value).toBe("Hello");
    });
});
