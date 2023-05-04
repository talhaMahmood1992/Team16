import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Role } from "../Interfaces";

interface EditMediaPageProps {
    role: Role;
    titles: string[];
    setList: React.Dispatch<React.SetStateAction<string[]>>;
}

export const EditMediaPage = ({ role }: EditMediaPageProps): JSX.Element => {
    const navigate = useNavigate();
    useEffect(() => {
        if (role == "Default") {
            navigate("/");
        }
    }, [role]);
    return (
        <>
            <h2 className="heading-secondary">Edit Media</h2>
        </>
    );
};
