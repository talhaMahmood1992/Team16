/* eslint-disable no-extra-parens */
import React, { useContext, useEffect, useState } from "react";
import { getUserWatchlists } from "../api/usersApi";
import { CurrentUserContext } from "../store/currentUserContext";
import { useFetchWatchlists } from "../hooks/useFetchWatchlists";
import { MediaInterface } from "../interfaces/MediaInterface";
import RatingFeature from "../Components/MediaRating";
import { DeleteMedia } from "../Components/DeleteMedia";
import { nanoid } from "nanoid";
import { DeleteUserMedia } from "../Components/UserMedia/DeleteUserMedia";
import { useNavigate } from "react-router-dom";
import { FilterByGenre } from "../Components/FilterByGenre/FilterByGenre";

export const FavoritesPage = (): JSX.Element => {
    const navigate = useNavigate();
    const { currentUser } = useContext(CurrentUserContext);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [watched, toWatch, loading, error, setWatched, setToWatch] =
        useFetchWatchlists(getUserWatchlists, currentUser?._id);

    const [filteredWatched, setFilteredWatched] = useState<MediaInterface[]>(
        []
    );
    const [filteredToWatch, setFilteredToWatch] = useState<MediaInterface[]>(
        []
    );

    function handleOnDrag(e: React.DragEvent, mediaId: string) {
        e.dataTransfer.setData("mediaId", mediaId);
    }
    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }
    function handleOnDropToWatch(e: React.DragEvent) {
        const MediaToMove = e.dataTransfer.getData("mediaId") as string;
        const searchInToWatch = watched.find(
            (media) => media["mediaId"] === MediaToMove
        );
        if (searchInToWatch) {
            const indexToRemove = watched.findIndex(
                (media) => media._id === searchInToWatch._id
            );

            if (indexToRemove >= 0) {
                const mediaToDel: MediaInterface = watched[indexToRemove];

                watched.splice(indexToRemove, 1);
                setToWatch([...toWatch, mediaToDel]);
                setWatched([...watched]);
            }
        }
    }
    function handleOnDropWatched(e: React.DragEvent) {
        const MediaToMove = e.dataTransfer.getData("mediaId") as string;
        const searchInToWatch = toWatch.find(
            (media) => media["mediaId"] === MediaToMove
        );
        if (searchInToWatch) {
            const indexToRemove = toWatch.findIndex(
                (media) => media._id === searchInToWatch._id
            );

            if (indexToRemove >= 0) {
                const mediaToDel: MediaInterface = toWatch[indexToRemove];

                toWatch.splice(indexToRemove, 1);
                setToWatch([...toWatch]);
                setWatched([...watched, mediaToDel]);
            }
        }
    }

    useEffect(() => {
        setFilteredWatched(watched);
        setFilteredToWatch(toWatch);
    }, [watched, toWatch]);

    const DragableMediaToButton = (mediaItem: MediaInterface): JSX.Element => {
        return (
            <div
                key={nanoid()}
                className="media-item"
                data-testid="mediaItem"
                draggable
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                onDragStart={(e) => handleOnDrag(e, mediaItem["mediaId"]!)}
            >
                <img src={mediaItem.image} alt={mediaItem.title} />
                <div className="media-details">
                    <p className="media-year" data-testid="mediaYear">
                        {mediaItem.yearReleased}
                    </p>
                    <button
                        onClick={() =>
                            navigate("/mediaRevision", {
                                state: {
                                    mediaItem,
                                    watched,
                                    toWatch,
                                    userId: currentUser?._id
                                }
                            })
                        }
                    >
                        Edit Media
                    </button>
                    <div className="media-rating">
                        <RatingFeature rating={mediaItem.rating} />
                    </div>
                </div>
            </div>
        );
    };
    return (
        <>
            <section className="page">
                {currentUser && currentUser.role === "Default" && (
                    <h2 className="heading-secondary">My Favorites</h2>
                )}
                {currentUser && currentUser.role !== "Default" && (
                    <h2 className="heading-secondary">Edit Media</h2>
                )}
            </section>
            {currentUser && currentUser.role === "Default" && (
                <FilterByGenre
                    watched={watched}
                    toWatch={toWatch}
                    setFilteredWatched={setFilteredWatched}
                    setFilteredToWatch={setFilteredToWatch}
                />
            )}
            {currentUser && currentUser.role === "Default" && (
                <div
                    className="media-list-container"
                    data-testid="mediaListContainer"
                >
                    <h2>To Watch</h2>
                    <div
                        className="media-list"
                        onDrop={handleOnDropToWatch}
                        onDragOver={handleDragOver}
                    >
                        {!loading &&
                            !error &&
                            filteredToWatch.map((mediaItem) =>
                                DragableMediaToButton(mediaItem)
                            )}
                    </div>
                </div>
            )}
            <div
                className="media-list-container"
                data-testid="mediaListContainer"
            >
                {currentUser && currentUser.role === "Default" && (
                    <h2>Watched</h2>
                )}
                <div
                    className="media-list"
                    onDrop={handleOnDropWatched}
                    onDragOver={handleDragOver}
                >
                    {!loading &&
                        !error &&
                        filteredWatched.map((mediaItem) =>
                            DragableMediaToButton(mediaItem)
                        )}
                    <DeleteUserMedia
                        toWatchMedia={toWatch}
                        watchedMedia={watched}
                    ></DeleteUserMedia>
                </div>
            </div>
            <DeleteMedia
                toWatch={toWatch}
                watched={watched}
                setToWatch={setToWatch}
                setWatched={setWatched}
            ></DeleteMedia>
        </>
    );
};
