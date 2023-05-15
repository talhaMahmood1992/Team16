/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import {
    getUserByUsername,
    getWatchedList,
    updateDeletedWatchedMedia
} from "../UserData";
import { mediaData } from "../MediaData";
import { Media } from "../Interfaces";
import { SpecialRating } from "./MediaRating";
import { nanoid } from "nanoid";
interface FavoriteMediaProps {
    userName: string;
}
export const DeleteMedia = (props: FavoriteMediaProps): JSX.Element => {
    const [trashColor, setTrashColor] = useState<string>("black");

    const [userMedia, setUserMedia] = useState<Media[]>([
        ...getWatchedList(getUserByUsername(props.userName))
    ]);
    function handleUserMedia(toDelete: string) {
        setUserMedia([
            ...updateDeletedWatchedMedia(props.userName, {
                ...FindMedia(toDelete)
            })
        ]);
    }

    function FindMedia(searchTerm: string) {
        const filteredData = mediaData.filter(
            (media) => media.title.toLowerCase() === searchTerm.toLowerCase()
        );
        return filteredData[0];
    }

    function handleOnDrop(e: React.DragEvent) {
        const toDelete = e.dataTransfer.getData("newMedia") as string;
        //Set the color of the star back to the original one
        setTrashColor("black");
        handleUserMedia(toDelete);

        // setUserMedia([...getWatchedList(getUserByUsername(props.userName))]);
        // window.location.reload();
    }
    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
        //To change the color of the star when the image can be dragged into the favoritesList
        setTrashColor("green");
    }
    function handleOnDrag(e: React.DragEvent, newMedia: string) {
        e.dataTransfer.setData("newMedia", newMedia);
    }

    const MediaToButton = (
        mediaItem: Media
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ): JSX.Element => {
        return (
            <div
                key={nanoid()}
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
                        {<SpecialRating></SpecialRating>}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div
                className="media-list-container"
                data-testid="mediaListContainer"
            >
                <div className="media-list">
                    {userMedia.map((mediaItem) => MediaToButton(mediaItem))}
                </div>
            </div>

            <div
                className="header-container"
                onDrop={handleOnDrop}
                onDragOver={handleDragOver}
            >
                <h1>
                    <FaTrash style={{ color: trashColor }} />
                </h1>
            </div>
            {console.log(userMedia)}
        </>
    );
};
