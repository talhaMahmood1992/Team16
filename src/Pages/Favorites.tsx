/* eslint-disable no-extra-parens */
import React, { useState } from "react";
// import RenderMedia from "../Components/RenderMedia";
import { getUserByUsername } from "../UserData";
import { Media, UserInterface } from "../Interfaces";
import { DeleteMedia } from "../Components/RemoveMedia";
interface FavoriteMediaProps {
    userName: string;
}
export const FavoritesPage = (props: FavoriteMediaProps): JSX.Element => {
    const currentUser = getUserByUsername(props.userName);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [watched, setDleteMedia] = useState<Media[]>(
        getWatchedList(currentUser)
    );

    function getWatchedList(user: UserInterface): Media[] {
        const watchedList: Media[] = user.watched.map((item) => item.media);
        return watchedList;
    }

    return (
        <>
            <section className="page">
                <h2 className="heading-secondary">My Favorites</h2>
            </section>
            <DeleteMedia userName={props.userName}></DeleteMedia>
        </>
    );
};
