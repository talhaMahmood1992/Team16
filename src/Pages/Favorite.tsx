import React from "react";
import { mediaData } from "../MediaData";
import RenderMedia from "../Components/RenderMedia";
import { DeleteMedia } from "../Components/RemoveMedia";
interface FavoriteMediaProps {
    titles: string[];
    handleFavorites: (titles: string[]) => void;
}
export const Favorite = (props: FavoriteMediaProps): JSX.Element => {
    const filteredMedia = props.titles.map((title) => FindMedia(title));

    return (
        <>
            <section className="page">
                <h2 className="heading-secondary">My Favorites</h2>
            </section>
            <DeleteMedia
                titles={props.titles}
                handleFavorites={props.handleFavorites}
            ></DeleteMedia>
            <div>
                <RenderMedia MediaData={filteredMedia} />
            </div>
        </>
    );
};

function FindMedia(searchTerm: string) {
    const filteredData = mediaData.filter(
        (media) => media.title.toLowerCase() === searchTerm.toLowerCase()
    );
    return filteredData[0];
}
