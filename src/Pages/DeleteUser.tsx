/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Role } from "../Interfaces";
import { UserInterface } from "../interfaces/UserInterface";
import { useFetchList } from "../hooks/useFetchList";
import { deleteUser, getUsersList } from "../api/usersApi";
import classes from "./DeleteUser.module.css";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { LoadingSpinner } from "../UI/LoadingSpinner";
/* eslint no-extra-parens: "off" */
/* eslint @typescript-eslint/no-unused-vars: "off" */

interface DeleteUserProps {
    role: Role;
}

export const DeleteUser = ({ role }: DeleteUserProps): JSX.Element => {
    // eslint-disable @typescript-eslint/no-unused-vars
    const [deletingLoading, setDeletingLoading] = useState<boolean>(false);
    const [usersList, usersLoading, error, setUsersList] = useFetchList(
        getUsersList,
        "users"
    );

    const navigate = useNavigate();
    useEffect(() => {
        if (role !== "Super") {
            navigate("/");
        }
    }, [role]);

    const deleteUserHandler = async (userId: string) => {
        setDeletingLoading(true);
        try {
            await deleteUser(userId);
            const updatedUsersList = usersList.filter(
                (user: UserInterface) => user._id !== userId
            );
            setUsersList(updatedUsersList);
        } catch (error) {
            console.log(error);
        }
        setDeletingLoading(false);
    };

    return (
        <>
            <h2 className="heading-secondary">Delete User</h2>
            <div className={classes.users_list}>
                {!usersLoading &&
                    !deletingLoading &&
                    usersList.map((user: UserInterface) => {
                        if (user.role === "Default") {
                            return (
                                <div
                                    key={user._id}
                                    className={classes.user_bar}
                                >
                                    <h3>{user.username}</h3>
                                    <button
                                        onClick={() =>
                                            deleteUserHandler(user._id!)
                                        }
                                    >
                                        <RiDeleteBack2Fill />
                                    </button>
                                </div>
                            );
                        }
                    })}
                {usersLoading && !deletingLoading && (
                    <LoadingSpinner
                        message="fetching users..."
                        color="yellow"
                    />
                )}
                {deletingLoading && (
                    <LoadingSpinner message="deleting user..." color="yellow" />
                )}
            </div>
        </>
    );
};
