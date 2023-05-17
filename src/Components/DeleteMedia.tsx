/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { CurrentUserContext } from "../store/currentUserContext";
import { getUserWatchlists } from "../api/usersApi";
import { useFetchWatchlists } from "../hooks/useFetchWatchlists";
import { MediaInterface } from "../interfaces/MediaInterface";
export const ToDeleteMedia = (): JSX.Element => {
    const { currentUser } = useContext(CurrentUserContext);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [watched, toWatch, loading, error, setWatched, setToWatch] =
        useFetchWatchlists(getUserWatchlists, currentUser?._id);

    const [trashColor, setTrashColor] = useState<string>("black");
    function updateDeletedMedia(toDeletemedia: MediaInterface): void {
        let indexToRemove = watched.findIndex(
            (media) => media["mediaId"] === toDeletemedia["mediaId"]
        );

        if (indexToRemove >= 0) {
            console.log("Before Deleting it, ", watched);

            watched.splice(indexToRemove, 1); // remove the element at indexToRemove
            console.log("Deleted it, ", watched);
        } else {
            indexToRemove = toWatch.findIndex(
                (media) => media["mediaId"] === toDeletemedia["mediaId"]
            );
            console.log("Before Deleting it, ", toWatch);

            toWatch.splice(indexToRemove, 1); // remove the element at indexToRemove
            console.log("Deleted it, ", toWatch);
        }
    }
    function FindMedia(searchTerm: string) {
        console.log(searchTerm);
        console.log(toWatch);

        let filteredData = toWatch.filter(
            (media) => media["title"] === searchTerm
        );

        if (filteredData === null) {
            filteredData = watched.filter(
                (media) => media["title"] === searchTerm
            );
        }
        return filteredData[0];
    }

    function handleOnDrop(e: React.DragEvent) {
        const toDelete = e.dataTransfer.getData("mediaId") as string;
        //Set the color of the star back to the original one
        setTrashColor("black");

        updateDeletedMedia(FindMedia(toDelete));
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
                onDragStart={handleOnDrop}
                onDragOver={handleDragOver}
            >
                <h1>
                    <FaTrash style={{ color: trashColor }} />
                </h1>
            </div>
        </>
    );
};
