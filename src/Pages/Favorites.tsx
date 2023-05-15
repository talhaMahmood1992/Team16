/* eslint-disable no-extra-parens */
import React, { useContext } from "react";
import { DeleteMedia } from "../Components/RemoveMedia";
import { getUserWatchlists } from "../api/usersApi";
import { CurrentUserContext } from "../store/currentUserContext";
import { useFetchWatchlists } from "../hooks/useFetchWatchlists";
import RenderMedia from "../Components/RenderMedia";
// import { MediaInterface } from "../interfaces/MediaInterface";
// import { removeImageFromMedia, removeMediaId } from "../utils/media-config";
// import { NavLink } from "react-router-dom";
interface FavoriteMediaProps {
    userName: string;
}
export const FavoritesPage = (props: FavoriteMediaProps): JSX.Element => {
    const { currentUser } = useContext(CurrentUserContext);
    const [watched, toWatch, loading, error, setWatched, setToWatch] =
        useFetchWatchlists(getUserWatchlists, currentUser?._id);

    // const saveData = async () => {
    //     let updatedWatched = [...watched];
    //     let updatedToWatch = [...toWatch];
    //     updatedWatched = removeImageFromMedia(updatedWatched);
    //     updatedWatched = removeMediaId(updatedWatched);
    //     updatedToWatch = removeImageFromMedia(updatedToWatch);
    //     updatedToWatch = removeMediaId(updatedToWatch);

    //     try {
    //         await updateUser(currentUser?._id, {
    //             watched: updatedWatched,
    //             toWatch: updatedToWatch
    //         });
    //         console.log("updated user");
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const testData = () => {
    //     const newMedia: MediaInterface = {
    //         _id: "645b4ac5f245634dd184e296",
    //         title: "Apocalypse Now",
    //         type: "Movie",
    //         yearReleased: 1979,
    //         rating: 5,
    //         image: require("../imgs/media-covers/apocalypse-now.jpg"),
    //         genres: ["Adventure", "History", "Thriller"]
    //     };
    //     const updatedWatched = [...watched, newMedia];

    //     setWatched(updatedWatched);
    //     setToWatch(toWatch);
    // };

    return (
        <>
            <section className="page">
                <h2 className="heading-secondary">My Favorites</h2>
            </section>
            <h2>Watched</h2>
            {!loading && !error && <RenderMedia MediaData={watched} />}

            <h2>To Watch</h2>
            {!loading && !error && <RenderMedia MediaData={toWatch} />}
            <DeleteMedia userName={props.userName}></DeleteMedia>
            {/* <button onClick={saveData}>Save</button>
            <button onClick={testData}>Add media</button> */}
        </>
    );
};
