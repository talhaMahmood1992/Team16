/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { CurrentUserContext } from "../store/currentUserContext";
import { useFetchWatchlists } from "../hooks/useFetchWatchlists";
import { getUserWatchlists } from "../api/usersApi";
import { MediaInterface } from "../interfaces/MediaInterface";
import { DeleteUserMedia } from "./UserMedia/DeleteUserMedia";
export const DeleteMedia = (): JSX.Element => {
    const [trashColor, setTrashColor] = useState<string>("black");
    const { currentUser } = useContext(CurrentUserContext);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [watched, toWatch, loading, error, setWatched, setToWatch] =
        useFetchWatchlists(getUserWatchlists, currentUser?._id);

    function handleUserMedia(toDelete: MediaInterface) {
        const indexToRemove = toWatch.findIndex(
            (media) => media._id === toDelete._id
        );

        if (indexToRemove >= 0) {
            const toWatchCopy = [...toWatch];
            toWatchCopy.splice(indexToRemove, 1); // remove the element at indexToRemove
            setToWatch([...toWatchCopy]);
            setWatched([...watched]);
        }
    }

    function handleOnDrop(e: React.DragEvent) {
        const toDelete = e.dataTransfer.getData("mediaId") as string;
        const searchInToWatch = toWatch.find((media) => media._id === toDelete);

        if (searchInToWatch) {
            handleUserMedia(searchInToWatch);
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
