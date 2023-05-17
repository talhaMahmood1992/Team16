/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { CurrentUserContext } from "../store/currentUserContext";
import { useFetchWatchlists } from "../hooks/useFetchWatchlists";
import { getUserWatchlists } from "../api/usersApi";
import { MediaInterface } from "../interfaces/MediaInterface";
import { DeleteUserMedia } from "./UserMedia/DeleteUserMedia";

interface deleteMediaProps {
    toWatch: MediaInterface[];
    watched: MediaInterface[];
    setToWatch: (media: MediaInterface[]) => void;
    setWatched: (media: MediaInterface[]) => void;
}

export const DeleteMedia = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    toWatch,
    watched,
    setToWatch,
    setWatched
}: deleteMediaProps): JSX.Element => {
    const [trashColor, setTrashColor] = useState<string>("black");

    function handleUserMedia(toDelete: MediaInterface) {
        let indexToRemove = toWatch.findIndex(
            (media) => media["mediaId"] === toDelete["mediaId"]
        );

        if (indexToRemove >= 0) {
            const toWatchCopy = [...toWatch];
            toWatchCopy.splice(indexToRemove, 1); // remove the element at indexToRemove
            setToWatch([...toWatchCopy]);
            // setWatched([...watched]);
        }
        indexToRemove = watched.findIndex(
            (media) => media["mediaId"] === toDelete["mediaId"]
        );

        if (indexToRemove >= 0) {
            const watchedCopy = [...watched];
            watchedCopy.splice(indexToRemove, 1); // remove the element at indexToRemove
            // setToWatch([...toWatchCopy]);
            setWatched([...watchedCopy]);
        }
    }

    function handleOnDrop(e: React.DragEvent) {
        const toDelete = e.dataTransfer.getData("mediaId") as string;
        console.log(toDelete, "MediaID");
        const searchInToWatch = toWatch.find(
            (media) => media["mediaId"] === toDelete
        );

        if (searchInToWatch) {
            handleUserMedia(searchInToWatch);
        }
        const searchInWatched = watched.find(
            (media) => media["mediaId"] === toDelete
        );
        if (searchInWatched) {
            handleUserMedia(searchInWatched);
        }

        setTrashColor("black");
    }
    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
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
            <DeleteUserMedia
                toWatchMedia={[...toWatch]}
                watchedMedia={[...watched]}
            ></DeleteUserMedia>
        </>
    );
};
