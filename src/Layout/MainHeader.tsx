import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
import { MainNavigation } from "./MainNavigation";

export const MainHeader = (): JSX.Element => {
    return (
        <header className={classes.header}>
            <NavLink to="/" className={classes.logo}>
                PROJECTX
            </NavLink>
            <MainNavigation />
        </header>
    );
};
