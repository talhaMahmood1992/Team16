/* eslint-disable no-extra-parens */
import React from "react";
import RenderMedia from "../Components/RenderMedia";
import { getUserByUsername } from "../UserData";
import { Media, UserInterface } from "../Interfaces";
interface FavoriteMediaProps {
    userName: string;
}
export const FavoritesPage = (props: FavoriteMediaProps): JSX.Element => {
    const currentUser = getUserByUsername(props.userName);
    function getWatchedList(user: UserInterface): Media[] {
        const watchedList: Media[] = user.watched.map((item) => item.media);
        return watchedList;
    }

    return (
        <>
            {" "}
            <section className="page">
                <h2 className="heading-secondary">My Favorites</h2>
                <h2>CurrentUserName = {props.userName}</h2>
            </section>
            <RenderMedia MediaData={getWatchedList(currentUser)} />
        </>
    );
};
