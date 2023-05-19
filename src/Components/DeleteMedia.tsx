/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MediaInterface } from "../interfaces/MediaInterface";

export interface deleteMediaProps {
    toWatch: MediaInterface[];
    watched: MediaInterface[];
    setToWatch: (media: MediaInterface[]) => void;
    setWatched: (media: MediaInterface[]) => void;
}

export const DeleteMedia = ({
    toWatch,
    watched,
    setToWatch,
    setWatched
}: deleteMediaProps): JSX.Element => {
    const [trashColor, setTrashColor] = useState<string>("black");

    function handleUserMedia(toDelete: MediaInterface) {
        //Find the index of the Media we want to remove
        //If the index is Valid, remove the media, and set the state

        let indexToRemove = toWatch.findIndex(
            (media) => media["mediaId"] === toDelete["mediaId"]
        );
        if (indexToRemove >= 0) {
            const toWatchCopy = [...toWatch];
            toWatchCopy.splice(indexToRemove, 1); // remove the element at indexToRemove
            setToWatch([...toWatchCopy]);
        }

        indexToRemove = watched.findIndex(
            (media) => media["mediaId"] === toDelete["mediaId"]
        );

        if (indexToRemove >= 0) {
            const watchedCopy = [...watched];
            watchedCopy.splice(indexToRemove, 1); // remove the element at indexToRemove
            setWatched([...watchedCopy]);
        }
    }

    function handleOnDrop(e: React.DragEvent) {
        const toDelete = e.dataTransfer.getData("mediaId") as string;
        console.log(toDelete, "MediaID");
        //Search for the Media in toWatch/Watched
        //Then remove it from the list
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
        <div
            className="trash-container"
            data-testid="headerContainer"
            onDrop={handleOnDrop}
            onDragOver={handleDragOver}
        >
            <h1 data-testid="trash-can">
                <FaTrash style={{ color: "white" }} />
            </h1>
            <p data-testid="Trash">Trash Here</p>
        </div>
    );
};
