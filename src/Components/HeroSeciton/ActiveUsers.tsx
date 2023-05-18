import React from "react";
import classes from "./ActiveUsers.module.css";

export const ActiveUsers = (): JSX.Element => {
    return (
        <div
            className={classes.current_users}
            data-testid="active-users-component"
        >
            <div className={classes.current_users_imgs}>
                <img
                    src={require("../../imgs/current-users/current-user-1.jpg")}
                    alt="Active user"
                />
                <img
                    src={require("../../imgs/current-users/current-user-2.jpg")}
                    alt="Active user"
                />
                <img
                    src={require("../../imgs/current-users/current-user-3.jpg")}
                    alt="Active user"
                />
                <img
                    src={require("../../imgs/current-users/current-user-4.jpg")}
                    alt="Active user"
                />
                <img
                    src={require("../../imgs/current-users/current-user-5.jpg")}
                    alt="Active user"
                />
                <img
                    src={require("../../imgs/current-users/current-user-6.jpg")}
                    alt="Bumblebee"
                />
            </div>
            <p className={classes.current_users_text}>
                <span>250,000+</span> &nbsp; active users!
            </p>
        </div>
    );
};
