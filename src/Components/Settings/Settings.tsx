import React, { useContext } from "react";
import Modal from "../../UI/Modal";
import { IoMdSettings } from "react-icons/io";
import classes from "./Settings.module.css";
import { BasicDropdown } from "../../UI/BasicDropdown";
import { useFetchList } from "../../hooks/useFetchList";
import { getUsersList } from "../../api/usersApi";
import { UserInterface } from "../../Interfaces";
import { CurrentUserContext } from "../../store/currentUserContext";

interface SettingsProps {
    hideSettingsHandler: () => void;
}

export const Settings = ({
    hideSettingsHandler
}: SettingsProps): JSX.Element => {
    const [usersList, loading] = useFetchList(getUsersList, "users");
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    let roleInfo = "Default";

    if (currentUser) {
        if (currentUser.role === "Default") {
            roleInfo = "Default user can do certain things";
        } else if (currentUser.role === "Admin") {
            roleInfo = "Admin user has a lot more power, they are better";
        } else if (currentUser.role === "Super") {
            roleInfo = "Super user is even... better";
        }
    }

    const setCurrentUserFromName = (name: string) => {
        const user = usersList.find(
            (user: UserInterface) => user.username == name
        );
        setCurrentUser(user!);
        if (user) {
            localStorage.setItem("userId", user["_id"]);
        }
    };

    return (
        <Modal
            hideSettingsHandler={hideSettingsHandler}
            className={classes.settings}
        >
            <h2 className={classes.settings_title}>
                <IoMdSettings /> Settings
            </h2>
            <section className={classes.settings_info}>
                <h3>Current Role: {currentUser?.role}</h3>
                <p>{roleInfo}</p>
            </section>
            <div className={classes.dropdown}>
                {!loading && (
                    <BasicDropdown
                        items={usersList.map(
                            (user: UserInterface) => user.username
                        )}
                        title={"Change User"}
                        onClick={setCurrentUserFromName}
                    />
                )}
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
