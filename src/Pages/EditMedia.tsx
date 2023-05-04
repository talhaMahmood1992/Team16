/* eslint-disable no-extra-parens */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Role } from "../Interfaces";
import { RenderSelectedMedia } from "./Favorites";
interface EditMediaPageProps {
    role: Role;
    titles: string[];
}

export const EditMediaPage = (props: EditMediaPageProps): JSX.Element => {
    const navigate = useNavigate();
    useEffect(() => {
        if (props.role == "Default") {
            navigate("/");
        }
    }, [props.role]);
    return (
        <>
            <h2 className="heading-secondary">Edit Media</h2>
            <RenderSelectedMedia titles={props.titles} />
        </>
    );
};
