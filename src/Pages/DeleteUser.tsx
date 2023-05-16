import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Role } from "../Interfaces";
import { UserInterface } from "../interfaces/UserInterface";
import { useFetchList } from "../hooks/useFetchList";
import { deleteUser, getUsersList } from "../api/usersApi";
import classes from "./DeleteUser.module.css";
import { RiDeleteBack2Fill } from "react-icons/ri";

interface DeleteUserProps {
    role: Role;
}

export const DeleteUser = ({ role }: DeleteUserProps): JSX.Element => {
    const [usersList, loading] = useFetchList(getUsersList, "users");
    const [usersListState, setUsersListState] = useState<UserInterface[]>([]);

    const navigate = useNavigate();
    useEffect(() => {
        if (role !== "Super") {
            navigate("/");
        }
    }, [role]);

    const deleteUserHandler = async (userId: string) => {
        try {
            await deleteUser(userId);
            const updatedUsersListState = usersListState.filter(
                (user: UserInterface) => user._id !== userId
            );
            setUsersListState(updatedUsersListState);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (usersList) {
            setUsersListState(usersList);
        }
    }, [usersList]);

    return (
        <>
            <h2 className="heading-secondary">Delete User</h2>
            <div className={classes.users_list}>
                {!loading &&
                    usersListState.map((user: UserInterface) => {
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
            </div>
        </>
    );
};
