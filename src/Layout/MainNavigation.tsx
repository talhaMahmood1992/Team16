import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserFriends, FaStar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoSearchCircleSharp } from "react-icons/io5";

import classes from "./MainNavigation.module.css";

export const MainNavigation = (): JSX.Element => {
    return (
        <nav>
            <ul className={classes.main_nav_list}>
                <li>
                    <NavLink to="/addMedia" className={classes.main_nav_link}>
                        <IoSearchCircleSharp /> Add Media
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/friends" className={classes.main_nav_link}>
                        <FaUserFriends /> Friends
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/mylists" className={classes.main_nav_link}>
                        <FaStar /> My Lists
                    </NavLink>
                </li>
                <li>
                    <a
                        href="#"
                        className={`${classes.main_nav_link} ${classes.nav_cta}`}
                    >
                        <IoMdSettings /> Default
                    </a>
                </li>
            </ul>
        </nav>
    );
};
