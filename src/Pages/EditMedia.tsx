import React from "react";
import { mediaData } from "../MediaData";
import RenderMedia from "../Components/RenderMedia";
interface FavoriteMediaProps {
    titles: string[];
}
export const MyListsPage = (props: FavoriteMediaProps): JSX.Element => {
    return (
        <>
            <FavoriteMedia titles={props.titles} />
            <section className="page">
                <h2 className="heading-secondary">Admin List</h2>
            </section>
        </>
    );
};

function FindMedia(searchTerm: string) {
    const filteredData = mediaData.filter(
        (media) => media.title.toLowerCase() === searchTerm.toLowerCase()
    );
    return filteredData[0];
}

export function FavoriteMedia(props: FavoriteMediaProps) {
    const filteredMedia = props.titles.map((title) => FindMedia(title));
    return (
        <div>
            <RenderMedia MediaData={filteredMedia} />
        </div>
    );
}
