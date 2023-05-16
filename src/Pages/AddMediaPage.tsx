import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AddMediaForm } from "../Components/AddMediaForm/AddMediaForm";
import { Media, Role } from "../Interfaces";

interface AddMediaPageProps {
    role: Role;
    mediaList: Media[];
    mediaSetter: React.Dispatch<React.SetStateAction<Media[]>>;
}

export const AddMediaPage = (props: AddMediaPageProps): JSX.Element => {
    const navigate = useNavigate();
    useEffect(() => {
        if (props.role !== "Super") {
            navigate("/");
        }
    }, [props.role]);
    return (
        <>
            <h2 className="heading-secondary">Add Media</h2>
            <AddMediaForm
                mediaList={props.mediaList}
                mediaSetter={props.mediaSetter}
            />
        </>
    );
};
