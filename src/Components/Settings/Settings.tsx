import React from "react";
import Modal from "../../UI/Modal";
import { IoMdSettings } from "react-icons/io";
import classes from "./Settings.module.css";
import { BasicDropdown } from "../../UI/BasicDropdown";
import { Role } from "../../Interfaces";
import { getUserNames } from "../../UserData";

interface SettingsProps {
    hideSettingsHandler: () => void;
    role: Role;
    setRole: (role: Role) => void;
    handleCurrentUser: (userName: string) => void;
}

export const Settings = ({
    hideSettingsHandler,
    role,
    setRole,
    handleCurrentUser
}: SettingsProps): JSX.Element => {
    let roleInfo = "Default";

    if (role === "Default") {
        roleInfo = "Default user can do certain things";
    } else if (role === "Admin") {
        roleInfo = "Admin user has a lot more power, they are better";
    } else if (role === "Super") {
        roleInfo = "Super user is even... better";
    }
    handleCurrentUser(role);

    return (
        <Modal
            hideSettingsHandler={hideSettingsHandler}
            className={classes.settings}
        >
            <h2 className={classes.settings_title}>
                <IoMdSettings /> Settings
            </h2>
            <section className={classes.settings_info}>
                <h3>Current Role: {role}</h3>
                <p>{roleInfo}</p>
            </section>
            <div className={classes.dropdown}>
                <BasicDropdown
                    items={getUserNames()}
                    title={"Change Role"}
                    onClick={setRole}
                />
            </div>
            <button
                className={classes.close_button}
                onClick={hideSettingsHandler}
            >
                Close
            </button>
        </Modal>
    );
};
