import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AddMediaForm } from "../Components/AddMediaForm/AddMediaForm";

type Role = "Default" | "Admin" | "Super";

interface AddMediaPageProps {
    role: Role;
}

export const AddMediaPage = ({ role }: AddMediaPageProps): JSX.Element => {
    const navigate = useNavigate();
    useEffect(() => {
        if (role !== "Admin") {
            navigate("/");
        }
    }, [role]);
    return (
        <>
            <h2 className="heading-secondary">Add Media</h2>
            <AddMediaForm />
        </>
    );
};
