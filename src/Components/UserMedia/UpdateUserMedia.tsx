/* eslint-disable no-extra-parens */
import React, { useContext, useState } from "react";
import { getUserWatchlists, updateUser } from "../../api/usersApi";
import { CurrentUserContext } from "../../store/currentUserContext";
import { useFetchWatchlists } from "../../hooks/useFetchWatchlists";
import { MediaInterface } from "../../interfaces/MediaInterface";
import { removeImageFromMedia, removeMediaId } from "../../utils/media-config";
import "./SaveButton.css";
interface toWatchProps {
    toWatchMedia: MediaInterface[];
    watchedMedia: MediaInterface[];
}
export const UpdateUserMedia = (props: toWatchProps): JSX.Element => {
    const [isSaving, setIsSaving] = useState(false);

    const { currentUser } = useContext(CurrentUserContext);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [watched, toWatch, loading, error, setWatched, setToWatch] =
        useFetchWatchlists(getUserWatchlists, currentUser?._id);

    const saveData = async () => {
        setIsSaving(true);

        let updatedWatched = [...watched, ...props.watchedMedia];
        let updatedToWatch = [...toWatch, ...props.toWatchMedia];
        updatedWatched = removeImageFromMedia(updatedWatched);
        updatedWatched = removeMediaId(updatedWatched);
        updatedToWatch = removeImageFromMedia(updatedToWatch);
        updatedToWatch = removeMediaId(updatedToWatch);

        try {
            await updateUser(currentUser?._id, {
                watched: updatedWatched,
                toWatch: updatedToWatch
            });
            setWatched(updatedWatched);
            setToWatch(updatedToWatch);
        } catch (error) {
            console.log(error);
        }
        setTimeout(() => {
            // Save logic here...
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
