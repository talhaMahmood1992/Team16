/* eslint-disable no-extra-parens */
import React from "react";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";
import classes from "./MainNavigation.module.css";
import { Role } from "../Interfaces";

interface MainNavigationProps {
    showSettingsHandler: () => void;
    role: Role;
}

export const MainNavigation = ({
    showSettingsHandler,
    role
}: MainNavigationProps): JSX.Element => {
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
                {role === "Admin" || role === "Super" ? (
                    <li>
                        <NavLink
                            to="/editMedia"
                            className={classes.main_nav_link}
                        >
                            <IoPencil className={classes.icon} />
                            <span>Edit Media</span>
                        </NavLink>
                    </li>
                ) : (
                    <></>
                )}

                {/* <li>
                    <NavLink to="/friends" className={classes.main_nav_link}>
                        <FaUserFriends className={classes.icon} />
                        <span>Friends</span>
                    </NavLink>
                </li> */}

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
                <li>
                    <button
                        className={classes.role_button}
                        onClick={showSettingsHandler}
                    >
                        <IoMdSettings className={classes.icon} />{" "}
                        <span>{role}</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};
