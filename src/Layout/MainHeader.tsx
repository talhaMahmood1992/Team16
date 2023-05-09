/* eslint-disable no-extra-parens */
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
import { MainNavigation } from "./MainNavigation";
import { Role } from "../Interfaces";

interface MainHeaderProps {
    showSettingsHandler: () => void;
    role: Role;
}

export const MainHeader = ({
    showSettingsHandler,
    role
}: MainHeaderProps): JSX.Element => {
    return (
        <header className={classes.header}>
            <NavLink to="/" className={classes.logo}>
                PROJECTX
            </NavLink>
            <MainNavigation
                showSettingsHandler={showSettingsHandler}
                role={role}
            />
        </header>
    );
};
