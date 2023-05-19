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
import { SortByRating } from "../Components/SortByRating/SortByRating";
import { LoadingSpinner } from "../UI/LoadingSpinner";
import classes from "./Favorites.module.css";

export const FavoritesPage = (): JSX.Element => {
    const navigate = useNavigate();
    const { currentUser } = useContext(CurrentUserContext);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ratingQuery, setRatingQuery] = useState<string>("");
    const [watched, toWatch, loading, error, setWatched, setToWatch] =
        useFetchWatchlists(getUserWatchlists, currentUser?._id, ratingQuery);

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
                (media) => media["mediaId"] === searchInToWatch["mediaId"]
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
                (media) => media["mediaId"] === searchInToWatch["mediaId"]
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
                    <div className="media-rating">
                        <RatingFeature rating={mediaItem.rating} />
                    </div>
                    <p>
                        {mediaItem.genres[0]}
                        {mediaItem.genres.length > 1 ? ", " : " "}
                        {mediaItem.genres[1]}
                    </p>
                    <button
                        className={classes.edit_button}
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
                </div>
            </div>
        );
    };
    return (
        <div
            className={
                currentUser && currentUser.role === "Default"
                    ? `${classes.page_color}`
                    : `${classes.edit_page_color}`
            }
        >
            <div className={classes.genreSort}>
                <div className={classes.genre}>
                    {currentUser && currentUser.role === "Default" && (
                        <FilterByGenre
                            watched={watched}
                            toWatch={toWatch}
                            setFilteredWatched={setFilteredWatched}
                            setFilteredToWatch={setFilteredToWatch}
                        />
                    )}
                </div>
                <div className={classes.sort}>
                    <SortByRating setRatingQuery={setRatingQuery} />
                </div>
            </div>
            {loading && (
                <LoadingSpinner message="fetching favorites..." color="black" />
            )}
            <div className={classes.row}>
                {currentUser && currentUser.role === "Default" && (
                    <div
                        className={
                            currentUser && currentUser.role === "Default"
                                ? `${classes.box}`
                                : `${classes.edit_box}`
                        }
                        data-testid="mediaListContainer"
                    >
                        <h2 className={classes.title}>To Watch</h2>
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
                    className={
                        currentUser && currentUser.role === "Default"
                            ? `${classes.box}`
                            : ""
                    }
                    data-testid="mediaListContainer"
                >
                    {currentUser && currentUser.role === "Default" && (
                        <h2 className={classes.title}>Watched</h2>
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
            </div>
            <DeleteMedia
                toWatch={toWatch}
                watched={watched}
                setToWatch={setToWatch}
                setWatched={setWatched}
            ></DeleteMedia>
        </div>
    );
};
