/* eslint-disable no-extra-parens */
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
import { MainNavigation } from "./MainNavigation";
import { Role } from "../Interfaces";
import { useLocation } from "react-router-dom";

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
            {useLocation().pathname === "/" && (
                <MainNavigation
                    showSettingsHandler={showSettingsHandler}
                    role={role}
                />
            )}
        </header>
    );
};
