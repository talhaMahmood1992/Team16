/* eslint-disable no-extra-parens */
import React, { useContext, useState } from "react";
import { getUserWatchlists, updateUser } from "../../api/usersApi";
import { CurrentUserContext } from "../../store/currentUserContext";
import { useFetchWatchlists } from "../../hooks/useFetchWatchlists";
import { MediaInterface } from "../../interfaces/MediaInterface";
import { removeImageFromMedia, removeMediaId } from "../../utils/media-config";
import "./SaveButton.css";

interface toWatchProps {
    watchedMedia: MediaInterface[];
}
export const UpdateEditMedia = (props: toWatchProps): JSX.Element => {
    const [isSaving, setIsSaving] = useState(false);

    const { currentUser } = useContext(CurrentUserContext);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [watched, toWatch, loading, error, setWatched, setToWatch] =
        useFetchWatchlists(getUserWatchlists, currentUser?._id);

    const watchedIds = watched.map((media: MediaInterface) => media.title);

    const saveData = () => {
        // setIsSaving(true);

        let updatedWatched: MediaInterface[] = watched;

        for (const media of props.watchedMedia) {
            if (!watchedIds.includes(media.title)) {
                updatedWatched.push(media);
            }
        }

        updatedWatched = removeImageFromMedia(updatedWatched);
        updatedWatched = removeMediaId(updatedWatched);

        setIsSaving(true);
        saveAPICall(updatedWatched);
        setIsSaving(false);
    };

    const saveAPICall = async (updatedWatched: MediaInterface[]) => {
        try {
            await updateUser(currentUser?._id, {
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
