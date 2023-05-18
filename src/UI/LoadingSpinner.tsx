import React from "react";
import classes from "./LoadingSpinner.module.css";

interface LoadingSpinnerProps {
    message: string;
    color: string;
}

export const LoadingSpinner = ({
    message,
    color
}: LoadingSpinnerProps): JSX.Element => {
    return (
        <div
            className={
                color === "black"
                    ? `${classes.loading_spinner_black}`
                    : `${classes.loading_spinner_yellow}`
            }
        >
            <div
                className={
                    color === "black"
                        ? `${classes.spinner_black}`
                        : `${classes.spinner_yellow}`
                }
            ></div>
            <p
                className={
                    color === "black"
                        ? `${classes.loading_text_black}`
                        : `${classes.loading_text_yellow}`
                }
            >
                {message}
            </p>
        </div>
    );
};
