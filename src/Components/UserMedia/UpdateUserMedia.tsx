/* eslint-disable no-extra-parens */
import React, { useContext } from "react";
import { getUserWatchlists, updateUser } from "../../api/usersApi";
import { CurrentUserContext } from "../../store/currentUserContext";
import { useFetchWatchlists } from "../../hooks/useFetchWatchlists";
import { MediaInterface } from "../../interfaces/MediaInterface";
import { removeImageFromMedia, removeMediaId } from "../../utils/media-config";
interface toWatchProps {
    toWatchMedia: MediaInterface[];
    watchedMedia: MediaInterface[];
}
export const UpdateUserMedia = (props: toWatchProps): JSX.Element => {
    const { currentUser } = useContext(CurrentUserContext);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [watched, toWatch, loading, error, setWatched, setToWatch] =
        useFetchWatchlists(getUserWatchlists, currentUser?._id);

    const saveData = async () => {
        let updatedWatched = [...watched, ...props.toWatchMedia];
        let updatedToWatch = [...toWatch, ...props.watchedMedia];
        updatedWatched = removeImageFromMedia(updatedWatched);
        updatedWatched = removeMediaId(updatedWatched);
        updatedToWatch = removeImageFromMedia(updatedToWatch);
        updatedToWatch = removeMediaId(updatedToWatch);

        try {
            await updateUser(currentUser?._id, {
                watched: updatedWatched,
                toWatch: updatedToWatch
            });
            console.log("updated user");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <button onClick={saveData}>Save</button>
        </>
    );
};
