/* eslint-disable no-extra-parens */
import React, { useContext } from "react";
import { DeleteMedia } from "../Components/RemoveMedia";
import { useFetchList } from "../hooks/useFetchList";
import { getUserWatchlists, updateUser } from "../api/usersApi";
import { CurrentUserContext } from "../store/currentUserContext";
import { useFetchWatchlists } from "../hooks/useFetchWatchlists";
import RenderMedia from "../Components/RenderMedia";
// import { NavLink } from "react-router-dom";
interface FavoriteMediaProps {
    userName: string;
}
export const FavoritesPage = (props: FavoriteMediaProps): JSX.Element => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [watchlists, loading, error] = useFetchWatchlists(
        getUserWatchlists,
        currentUser?._id
    );
    const watched = watchlists.watched;
    const toWatch = watchlists.toWatch;

    const handleSaveButton = async () => {
        // try {
        //     await updateUser(currentUser?._id, watchlists);
        // } catch (error) {
        //     console.log(error);
        // }
    };

    return (
        <>
            <section className="page">
                <h2 className="heading-secondary">My Favorites</h2>
            </section>
            <h2>Watched</h2>
            {!loading && <RenderMedia MediaData={watched} />}

            <h2>To Watch</h2>
            {!loading && <RenderMedia MediaData={toWatch} />}
            <DeleteMedia userName={props.userName}></DeleteMedia>
            <button onClick={handleSaveButton}>Save</button>
        </>
    );
};
