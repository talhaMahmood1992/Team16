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
                        <IoSearchCircleSharp className={classes.icon} />
                        <span>Add Media</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/friends" className={classes.main_nav_link}>
                        <FaUserFriends className={classes.icon} />
                        <span>Friends</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/mylists" className={classes.main_nav_link}>
                        <FaStar className={classes.icon} />
                        <span>My Lists</span>
                    </NavLink>
                </li>
                <li>
                    <button className={classes.role_button}>
                        <IoMdSettings className={classes.icon} />{" "}
                        <span>Default</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};
