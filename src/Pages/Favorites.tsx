import React from "react";
import { mediaData } from "../MediaData";
import RenderMedia from "../Components/RenderMedia";
interface FavoriteMediaProps {
    titles: string[];
}
export const FavoritesPage = (props: FavoriteMediaProps): JSX.Element => {
    return (
        <>
            <section className="page">
                <h2 className="heading-secondary">My Favorites</h2>
            </section>
            <RenderSelectedMedia titles={props.titles} />
        </>
    );
};

export function FindMedia(searchTerm: string) {
    const filteredData = mediaData.filter(
        (media) => media.title.toLowerCase() === searchTerm.toLowerCase()
    );
    return filteredData[0];
}

export function RenderSelectedMedia(props: FavoriteMediaProps) {
    const filteredMedia = props.titles.map((title) => FindMedia(title));
    return (
        <div>
            <RenderMedia MediaData={filteredMedia} />
        </div>
    );
}
