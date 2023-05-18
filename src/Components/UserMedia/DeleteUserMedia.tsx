/* eslint-disable no-extra-parens */
import React, { useContext, useState } from "react";
import { updateUser } from "../../api/usersApi";
import { CurrentUserContext } from "../../store/currentUserContext";
import { MediaInterface } from "../../interfaces/MediaInterface";
import { removeImageFromMedia, removeMediaId } from "../../utils/media-config";
import "./SaveButton.css";
interface DeleteMediaProps {
    toWatchMedia: MediaInterface[];
    watchedMedia: MediaInterface[];
}
export const DeleteUserMedia = (props: DeleteMediaProps): JSX.Element => {
    const [isSaving, setIsSaving] = useState(false);

    const { currentUser } = useContext(CurrentUserContext);

    const saveData = async () => {
        setIsSaving(true);

        let updatedWatched = [...props.watchedMedia];
        let updatedToWatch = [...props.toWatchMedia];
        updatedWatched = removeImageFromMedia(updatedWatched);
        updatedWatched = removeMediaId(updatedWatched);
        updatedToWatch = removeImageFromMedia(updatedToWatch);
        if (currentUser?.role === "Admin" || currentUser?.role === "Super") {
            try {
                await updateUser("645e8ce9a3aae9249f9fdf2f", {
                    watched: updatedWatched,
                    toWatch: updatedToWatch
                });
                await updateUser("645e8ce9a3aae9249f9fdf2e", {
                    watched: updatedWatched,
                    toWatch: updatedToWatch
                });
                console.log("updated user");
            } catch (error) {
                console.log(error);
            }
            setTimeout(() => {
                setIsSaving(false);
            }, 2000);
        }
        try {
            await updateUser(currentUser?._id, {
                watched: updatedWatched,
                toWatch: updatedToWatch
            });
            console.log("updated user");
        } catch (error) {
            console.log(error);
        }
        setTimeout(() => {
            setIsSaving(false);
        }, 2000);
    };
    return (
        <>
            <button
                className="save-button"
                onClick={saveData}
                disabled={isSaving}
            >
                {isSaving ? "Saving..." : "Save"}
            </button>
        </>
    );
};
