/* eslint-disable no-extra-parens */
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
import { MainNavigation } from "./MainNavigation";
interface MainHeaderProps {
    showSettingsHandler: () => void;
}

export const MainHeader = ({
    showSettingsHandler
}: MainHeaderProps): JSX.Element => {
    return (
        <header className={classes.header}>
            <NavLink to="/" className={classes.logo}>
                PROJECTX
            </NavLink>
            <MainNavigation showSettingsHandler={showSettingsHandler} />
        </header>
    );
};
