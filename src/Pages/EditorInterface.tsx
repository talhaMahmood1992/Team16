import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EditMediaForm } from "../Components/AddMediaForm/EditMediaForm";
import { Role } from "../Interfaces";

interface AddMediaPageProps {
    role: Role;
}

export const EditorInterface = ({ role }: AddMediaPageProps): JSX.Element => {
    const navigate = useNavigate();
    useEffect(() => {
        if (role == "Default") {
            navigate("/");
        }
    }, [role]);
    return (
        <>
            <h2 className="heading-secondary">Edit Media</h2>
            <EditMediaForm />
        </>
    );
};
