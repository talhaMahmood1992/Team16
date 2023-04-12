import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./NotFound.module.css";

export const NotFound = (): JSX.Element => {
    const navigate = useNavigate();
    useEffect(() => {
        const navigateTimeout = setTimeout(() => {
            navigate(-1);
        }, 1500);

        return () => {
            clearTimeout(navigateTimeout);
        };
    }, []);
    return (
        <div className={classes.not_found}>
            <p className={classes.not_found_text}>
                Bumblebee couldn&apos;t find what you were looking for...
            </p>
            <img src={require("../imgs/not-found.png")} alt="Not Found" />
            <p className={classes.redirecting}>Redirecting...</p>
        </div>
    );
};
