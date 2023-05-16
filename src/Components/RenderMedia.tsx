/* eslint-disable no-extra-parens */
import React from "react";
//import { mediaData } from "../MediaData";
//import MediaFeature from "../Components/MediaRatting";
import { Media } from "../Interfaces";
import RatingFeature from "./MediaRating";
import "./RenderMedia.css"; // Import CSS file for styling
function handleOnDrag(e: React.DragEvent, newMedia: string) {
    e.dataTransfer.setData("newMedia", newMedia);
}
export const mediaToElement = (mediaItem: Media): JSX.Element => {
    return (
        <div
            key={mediaItem._id}
            className="media-item"
            data-testid="mediaItem"
            draggable
            onDragStart={(e) => handleOnDrag(e, mediaItem.title)}
        >
            <img src={mediaItem.image} alt={mediaItem.title} />
            <div className="media-details">
                <p className="media-year" data-testid="mediaYear">
                    {mediaItem.yearReleased}
                </p>
                <div className="media-rating">
                    {<RatingFeature rating={mediaItem.rating}></RatingFeature>}
                </div>
                <p>
                    {mediaItem.genres[0]}
                    {mediaItem.genres.length > 1 ? ", " : " "}
                    {mediaItem.genres[1]}
                </p>
            </div>
        </div>
    );
};

export default function RenderMedia({
    MediaData
}: {
    MediaData: Media[];
}): JSX.Element {
    const mediaList = MediaData.map((Media) => {
        return {
            ...Media
        };
    });
    return (
        <div className="media-list-container" data-testid="mediaListContainer">
            <div className="media-list">
                {mediaList.map((mediaItem) => mediaToElement(mediaItem))}
            </div>
        </div>
    );
}
