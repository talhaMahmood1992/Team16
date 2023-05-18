/* eslint-disable no-extra-parens */
import React from "react";
import { EditMediaForm } from "../Components/Forms/EditMediaForm/EditMediaForm";
import { Role } from "../Interfaces";
import { UserEditMediaForm } from "../Components/Forms/UserEditMedia/UserEditMedia";

interface EditInterfaceProps {
    role: Role;
}

export const EditorInterface = (props: EditInterfaceProps): JSX.Element => {
    return (
        <>
            <h2 className="heading-secondary">Edit Media</h2>
            {props.role !== "Default" && <EditMediaForm />}
            {props.role === "Default" && <UserEditMediaForm />}
        </>
    );
};
