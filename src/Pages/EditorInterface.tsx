import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EditMediaForm } from "../Components/AddMediaForm/EditMediaForm";
import { Media, Role } from "../Interfaces";

interface EditInterfaceProps {
    role: Role;
    media: Media;
    mediaSetter: React.Dispatch<React.SetStateAction<Media[]>>;
    superSetter: React.Dispatch<React.SetStateAction<string[]>>;
}

export const EditorInterface = (props: EditInterfaceProps): JSX.Element => {
    const navigate = useNavigate();
    useEffect(() => {
        if (props.role == "Default") {
            navigate("/");
        }
    }, [props.role]);
    return (
        <>
            <h2 className="heading-secondary">Edit Media</h2>
            <EditMediaForm
                media={props.media}
                mediaSetter={props.mediaSetter}
                superSetter={props.superSetter}
            />
        </>
    );
};
