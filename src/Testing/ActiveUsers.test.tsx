import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ActiveUsers } from "../Components/HeroSeciton/ActiveUsers";

describe("AddMediaForm", () => {
    test("renders user images", () => {
        render(<ActiveUsers />);
        const userImages = screen.getAllByRole("img");
        expect(userImages.length).toBe(6);
    });

    test("component has correct CSS class", () => {
        render(<ActiveUsers />);
        const component = screen.getByTestId("active-users-component");
        expect(component).toHaveClass("current_users");
    });

    test("renders active users text with correct content", () => {
        render(<ActiveUsers />);
        const activeUsersText = screen.getByText(/250,000\+/);
        expect(activeUsersText).toBeInTheDocument();
    });
    test("renders active users text with correct content", () => {
        render(<ActiveUsers />);
        const activeUsersText = screen.getByText(/250,000\+/);
        expect(activeUsersText).toBeInTheDocument();
    });
    test("renders active users text with correct content", () => {
        render(<ActiveUsers />);
        const activeUsersText = screen.queryByText((content, element) => {
            return (
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                element!.tagName.toLowerCase() === "p" &&
                content.includes("active users!")
            );
        });
        expect(activeUsersText).toBeInTheDocument();
    });
});
