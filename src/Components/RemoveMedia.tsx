/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { getUserByUsername, updateDeletedWatchedMedia } from "../UserData";
import { mediaData } from "../MediaData";
import { Media, UserInterface } from "../Interfaces";
import RenderMedia from "./RenderMedia";
interface FavoriteMediaProps {
    userName: string;
}
export const DeleteMedia = (props: FavoriteMediaProps): JSX.Element => {
    // eslint-disable-next-line prefer-const
    const [deleteMedia, setDleteMedia] = useState<string>("");

    const [trashColor, setTrashColor] = useState<string>("black");

    const currentUser = getUserByUsername(props.userName);

    function getWatchedList(user: UserInterface): Media[] {
        const watchedList: Media[] = user.watched.map((item) => item.media);
        return watchedList;
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
        setDleteMedia(toDelete);

        updateDeletedWatchedMedia(currentUser.username, {
            ...FindMedia(toDelete)
        });
        setTrashColor("black");
    }
    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
        //To change the color of the star when the image can be dragged into the favoritesList
        setTrashColor("green");
    }
    return (
        <>
            <div
                className="header-container"
                onDrop={handleOnDrop}
                onDragOver={handleDragOver}
            >
                <h1>
                    <FaTrash style={{ color: trashColor }} />
                </h1>
            </div>
            {console.log(getWatchedList(currentUser))}{" "}
            <RenderMedia MediaData={getWatchedList(currentUser)}></RenderMedia>
        </>
    );
};
