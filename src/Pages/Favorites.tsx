/* eslint-disable no-extra-parens */
import React from "react";
// import RenderMedia from "../Components/RenderMedia";
import { DeleteMedia } from "../Components/RemoveMedia";
import { Role, Media } from "../Interfaces";
interface FavoriteMediaProps {
    userName: string;
    role: Role;
    titles: string[];
    setter: React.Dispatch<React.SetStateAction<Media>>;
}
export const FavoritesPage = (props: FavoriteMediaProps): JSX.Element => {
    return (
        <>
            <section className="page">
                <h2 className="heading-secondary">My Favorites</h2>
            </section>
            <DeleteMedia
                userName={props.userName}
                role={props.role}
                titles={props.titles}
                setter={props.setter}
            ></DeleteMedia>
        </>
    );
};
