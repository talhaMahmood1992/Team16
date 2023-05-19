import React from "react";
import classes from "./SuccessfulDisplay.module.css";
import { ImCheckmark } from "react-icons/im";

interface SuccessfulDisplayProps {
    message: string;
    color: string;
}

export const SuccessfulDisplay = ({
    message,
    color
}: SuccessfulDisplayProps): JSX.Element => {
    return (
        <div
            className={
                color === "black"
                    ? `${classes.successful_display_black}`
                    : `${classes.successful_display_yellow}`
            }
        >
            <div
                className={
                    color === "black"
                        ? `${classes.successful_black}`
                        : `${classes.successful_yellow}`
                }
            >
                <ImCheckmark />
            </div>
            <p
                className={
                    color === "black"
                        ? `${classes.successful_text_black}`
                        : `${classes.successful_text_yellow}`
                }
            >
                {message}
            </p>
        </div>
    );
};
