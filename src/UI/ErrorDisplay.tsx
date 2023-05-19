import React from "react";
import classes from "./ErrorDisplay.module.css";
import { BiError } from "react-icons/bi";

interface ErrorDisplayProps {
    message: string;
    color: string;
}

export const ErrorDisplay = ({
    message,
    color
}: ErrorDisplayProps): JSX.Element => {
    return (
        <div
            className={
                color === "black"
                    ? `${classes.error_display_black}`
                    : `${classes.error_display_yellow}`
            }
        >
            <div
                className={
                    color === "black"
                        ? `${classes.error_black}`
                        : `${classes.error_yellow}`
                }
            >
                <BiError />
            </div>
            <p
                className={
                    color === "black"
                        ? `${classes.error_text_black}`
                        : `${classes.error_text_yellow}`
                }
            >
                {message}
            </p>
        </div>
    );
};
