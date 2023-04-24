import React from "react";
import { render, screen } from "@testing-library/react";
import RatingFeature from "./MediaRatting";
import "@testing-library/jest-dom/extend-expect";

//Test that the component renders without throwing an error:
describe("RatingFeature tests", () => {
    test("renders without crashing", () => {
        render(<RatingFeature rating={3} />);
    });

    //Test that the component displays the correct number of stars:
    test("displays correct number of stars", () => {
        render(<RatingFeature rating={3} />);
        expect(screen.getAllByTestId("star-icon")).toHaveLength(5);
    });

    //Test that the component displays all empty stars when rating is 0:
    test("displays all empty stars when rating is 0", () => {
        render(<RatingFeature rating={0} />);
        const stars = screen.getAllByTestId("star-icon");
        expect(stars[0]).toHaveAttribute("color", "#D4D4D4");
        expect(stars[1]).toHaveAttribute("color", "#D4D4D4");
        expect(stars[2]).toHaveAttribute("color", "#D4D4D4");
        expect(stars[3]).toHaveAttribute("color", "#D4D4D4");
        expect(stars[4]).toHaveAttribute("color", "#D4D4D4");
    });

    //Test that the component displays all filled stars when rating is 5:
    test("displays all filled stars when rating is 5", () => {
        render(<RatingFeature rating={5} />);
        const stars = screen.getAllByTestId("star-icon");
        expect(stars[0]).toHaveAttribute("color", "#FFDD00");
        expect(stars[1]).toHaveAttribute("color", "#FFDD00");
        expect(stars[2]).toHaveAttribute("color", "#FFDD00");
        expect(stars[3]).toHaveAttribute("color", "#FFDD00");
        expect(stars[4]).toHaveAttribute("color", "#FFDD00");
    });

    //Test that the component displays the correct number of filled stars:
    test("displays correct number of filled stars", () => {
        render(<RatingFeature rating={3} />);
        const stars = screen.getAllByTestId("star-icon");
        expect(stars[0]).toHaveAttribute("color", "#FFDD00");
        expect(stars[1]).toHaveAttribute("color", "#FFDD00");
        expect(stars[2]).toHaveAttribute("color", "#FFDD00");
        expect(stars[3]).toHaveAttribute("color", "#D4D4D4");
        expect(stars[4]).toHaveAttribute("color", "#D4D4D4");
    });

    //Test that the component displays the correct number of stars when rating is greater than 5:
    test("displays 5 stars when rating is greater than 5", () => {
        render(<RatingFeature rating={10} />);
        expect(screen.getAllByTestId("star-icon")).toHaveLength(5);
    });

    //Test that the component displays the correct number of stars when rating is less than
    test("displays 5 stars when rating is less than 0", () => {
        render(<RatingFeature rating={-1} />);
        expect(screen.getAllByTestId("star-icon")).toHaveLength(5);
    });

    //Test that the component displays the correct number of stars when rating is not a number:
    test("displays 5 stars when rating is not a number", () => {
        render(<RatingFeature rating={NaN} />);
        expect(screen.getAllByTestId("star-icon")).toHaveLength(5);
    });

    //Test whether the component renders five stars or not.
    // We're doing this by rendering the RatingFeature component with a
    //rating of 3 and then checking if the number of stars rendered is equal to 5.
    test("it renders five stars", () => {
        render(<RatingFeature rating={3} />);
        const starIcons = screen.getAllByTestId("star-icon");

        expect(starIcons.length).toBe(5);
    });

    //Test that the component displays all empty stars when rating is negative:
    test("displays all empty stars when rating is -1", () => {
        render(<RatingFeature rating={-1} />);
        const stars = screen.getAllByTestId("star-icon");
        expect(stars[0]).toHaveAttribute("color", "#D4D4D4");
        expect(stars[1]).toHaveAttribute("color", "#D4D4D4");
        expect(stars[2]).toHaveAttribute("color", "#D4D4D4");
        expect(stars[3]).toHaveAttribute("color", "#D4D4D4");
        expect(stars[4]).toHaveAttribute("color", "#D4D4D4");
    });

    //Test that the component displays all empty stars when rating is not a number:
    test("displays all empty stars when rating is not a number", () => {
        render(<RatingFeature rating={NaN} />);
        const stars = screen.getAllByTestId("star-icon");
        expect(stars[0]).toHaveAttribute("color", "#D4D4D4");
        expect(stars[1]).toHaveAttribute("color", "#D4D4D4");
        expect(stars[2]).toHaveAttribute("color", "#D4D4D4");
        expect(stars[3]).toHaveAttribute("color", "#D4D4D4");
        expect(stars[4]).toHaveAttribute("color", "#D4D4D4");
    });
});
