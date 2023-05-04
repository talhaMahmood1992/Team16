/* eslint-disable no-extra-parens */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Role } from "../Interfaces";

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
            <ul>
                {props.titles.map((title: string) => (
                    <li key={props.titles.indexOf(title)}>{title}</li>
                ))}
            </ul>{" "}
        </>
    );
};
