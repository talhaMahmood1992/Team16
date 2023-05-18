import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Role } from "../Interfaces";
import { AddMediaForm } from "../Components/Forms/AddMediaForm/AddMediaForm";

interface AddMediaPageProps {
    role: Role;
}

export const AddMediaPage = ({ role }: AddMediaPageProps): JSX.Element => {
    const navigate = useNavigate();
    useEffect(() => {
        if (role !== "Super") {
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
