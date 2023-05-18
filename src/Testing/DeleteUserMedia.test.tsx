import React from "react";
import { render, screen } from "@testing-library/react";
import { DeleteUserMedia } from "../Components/UserMedia/DeleteUserMedia";
import "@testing-library/jest-dom/extend-expect";

test("renders DeleteUserMedia without errors", () => {
    render(<DeleteUserMedia toWatchMedia={[]} watchedMedia={[]} />);
});
