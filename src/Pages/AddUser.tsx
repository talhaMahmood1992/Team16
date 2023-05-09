import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AddUserForm } from "../Components/AddMediaForm/AddUserForm";
import { Role } from "../Interfaces";

interface AddUserProps {
    role: Role;
}

export const AddUser = ({ role }: AddUserProps): JSX.Element => {
    const navigate = useNavigate();
    useEffect(() => {
        if (role !== "Super") {
            navigate("/");
        }
    }, [role]);
    return (
        <>
            <h2 className="heading-secondary">Add User</h2>
            <AddUserForm />
        </>
    );
};
