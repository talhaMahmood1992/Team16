import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        <div>
            <p>This is AddMediaPage</p>
        </div>
    );
};
