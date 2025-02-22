/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-extra-parens */
import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";
import classes from "./MainNavigation.module.css";
import { CurrentUserContext } from "../store/currentUserContext";

interface MainNavigationProps {
    showSettingsHandler: () => void;
}

export const MainNavigation = ({
    showSettingsHandler
}: MainNavigationProps): JSX.Element => {
    const { currentUser } = useContext(CurrentUserContext);
    const { role, username } = currentUser!;

    return (
        <nav>
            <ul className={classes.main_nav_list}>
                {role === "Super" /* eslint-disable-line */ && ( //Now Add Media will only show for the Super
                    <li>
                        <NavLink
                            to="/addMedia"
                            className={classes.main_nav_link}
                        >
                            <IoSearchCircleSharp className={classes.icon} />
                            <span>Add Media</span>
                        </NavLink>
                    </li>
                )}
                {role === "Super" /* eslint-disable-line */ && ( //Now Add Media will only show for the Super
                    <li>
                        <NavLink
                            to="/DeleteUser"
                            className={classes.main_nav_link}
                        >
                            <IoSearchCircleSharp className={classes.icon} />
                            <span>Delete User</span>
                        </NavLink>
                    </li>
                )}

                {role === "Super" /* eslint-disable-line */ && ( //Now Add Media will only show for the Super
                    <li>
                        <NavLink
                            to="/addUser"
                            className={classes.main_nav_link}
                        >
                            <IoSearchCircleSharp className={classes.icon} />
                            <span>Add User</span>
                        </NavLink>
                    </li>
                )}

                {role === "Admin" || role === "Super" ? (
                    <li>
                        <NavLink
                            to="/mylists"
                            className={classes.main_nav_link}
                        >
                            <IoPencil className={classes.icon} />
                            <span>Edit Media</span>
                        </NavLink>
                    </li>
                ) : (
                    <></>
                )}

                {role !== "Super" && role !== "Admin" && (
                    /* eslint-disable-line */ <li>
                        <NavLink
                            to="/mylists"
                            className={classes.main_nav_link}
                        >
                            <FaStar className={classes.icon} />
                            <span>Favorites</span>
                        </NavLink>
                    </li>
                )}
                {useLocation().pathname === "/" && (
                    <li>
                        <button
                            className={classes.role_button}
                            onClick={showSettingsHandler}
                        >
                            <IoMdSettings className={classes.icon} />{" "}
                            <span>{username}</span>
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};
