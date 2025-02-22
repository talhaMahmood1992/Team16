/* eslint-disable no-extra-parens */
import React, { useContext, useState } from "react";
import { getUserWatchlists, updateUser } from "../../api/usersApi";
import { CurrentUserContext } from "../../store/currentUserContext";
import { useFetchWatchlists } from "../../hooks/useFetchWatchlists";
import { MediaInterface } from "../../interfaces/MediaInterface";
import { removeImageFromMedia, removeMediaId } from "../../utils/media-config";
import "./SaveButton.css";
import { removeDuplicateMedia } from "./UpdateUserMedia";

interface toWatchProps {
    watchedMedia: MediaInterface[];
}
export const UpdateEditMedia = (props: toWatchProps): JSX.Element => {
    const [isSaving, setIsSaving] = useState(false);

    const { currentUser } = useContext(CurrentUserContext);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [watched, toWatch, loading, error, setWatched, setToWatch] =
        useFetchWatchlists(getUserWatchlists, currentUser?._id, "");

    const saveData = () => {
        // setIsSaving(true);

        let updatedWatched = removeDuplicateMedia([
            ...watched,
            ...props.watchedMedia
        ]);

        updatedWatched = removeImageFromMedia(updatedWatched);
        updatedWatched = removeMediaId(updatedWatched);

        setIsSaving(true);
        saveAPICall(updatedWatched);
        setIsSaving(false);
    };

    const saveAPICall = async (updatedWatched: MediaInterface[]) => {
        try {
            await updateUser("645e8ce9a3aae9249f9fdf2f", {
                watched: updatedWatched,
                toWatch: []
            });
            await updateUser("645e8ce9a3aae9249f9fdf2e", {
                watched: updatedWatched,
                toWatch: []
            });
            setWatched(updatedWatched);
            console.log("updated user");
        } catch (error) {
            console.log("There is an error");
            console.log(error);
        }
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
