import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EditMediaForm } from "../Components/Forms/EditMediaForm/EditMediaForm";
import { Media, Role } from "../Interfaces";
import { UserEditMediaForm } from "../Components/Forms/UserEditMedia/UserEditMedia";

interface EditInterfaceProps {
    role: Role;
    media: Media;
}

export const EditorInterface = (props: EditInterfaceProps): JSX.Element => {
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (props.role == "Default") {
    //         navigate("/");
    //     }
    // }, [props.role]);
    return (
        <>
            <h2 className="heading-secondary">Edit Media</h2>
            {props.role !== "Default" && <EditMediaForm media={props.media} />}
            {props.role === "Default" && (
                <UserEditMediaForm media={props.media} />
            )}
        </>
    );
};
