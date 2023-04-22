import React from "react";
import { render, screen } from "@testing-library/react";
import RatingFeature from "./MediaRatting";
import "@testing-library/jest-dom/extend-expect"; // import the jest-dom package

//Test that the component renders without throwing an error:
describe("RatingFeature tests", () => {
    test("renders without crashing", () => {
        render(<RatingFeature rating={3} />);
    });
});
