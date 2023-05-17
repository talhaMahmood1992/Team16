import React, { useContext } from "react";
import { getUserWatchlists } from "../api/usersApi";
import { CurrentUserContext } from "../store/currentUserContext";
import { useFetchWatchlists } from "../hooks/useFetchWatchlists";
import { MediaInterface } from "../interfaces/MediaInterface";
import { SpecialRating } from "../Components/MediaRating";
import { DeleteMedia } from "../Components/RemoveMedia";
import { nanoid } from "nanoid";
import { DeleteUserMedia } from "../Components/UserMedia/DeleteUserMedia";

export const FavoritesPage = (): JSX.Element => {
    const { currentUser } = useContext(CurrentUserContext);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [watched, toWatch, loading, error, setWatched, setToWatch] =
        useFetchWatchlists(getUserWatchlists, currentUser?._id);
    function handleOnDrag(e: React.DragEvent, mediaId: string) {
        e.dataTransfer.setData("mediaId", mediaId);
    }
    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    function handleOnDropWatched(e: React.DragEvent) {
        const MediaToMove = e.dataTransfer.getData("mediaId") as string;
        const searchInToWatch = toWatch.find(
            (media) => media._id === MediaToMove
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
                console.log("Here Fine me");
            }
        }
    }

    const DragableMediaToButton = (
        mediaItem: MediaInterface
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ): JSX.Element => {
        return (
            <div
                key={nanoid()}
                className="media-item"
                data-testid="mediaItem"
                draggable
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                onDragStart={(e) => handleOnDrag(e, mediaItem["_id"]!)}
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

    const MediaToButton = (
        mediaItem: MediaInterface
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ): JSX.Element => {
        return (
            <div key={nanoid()} className="media-item" data-testid="mediaItem">
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
            <section className="page">
                <h2 className="heading-secondary">My Favorites</h2>
            </section>
            <div
                className="media-list-container"
                data-testid="mediaListContainer"
            >
                <h2>To Watch</h2>
                <div className="media-list">
                    {!loading &&
                        !error &&
                        toWatch.map((mediaItem) =>
                            DragableMediaToButton(mediaItem)
                        )}
                </div>
            </div>
            <div
                className="media-list-container"
                data-testid="mediaListContainer"
            >
                <h2>Watched</h2>
                <div
                    className="media-list"
                    onDrop={handleOnDropWatched}
                    onDragOver={handleDragOver}
                >
                    {!loading &&
                        !error &&
                        watched.map((mediaItem) => MediaToButton(mediaItem))}
                    <h3>Update the list</h3>
                    <DeleteUserMedia
                        toWatchMedia={toWatch}
                        watchedMedia={watched}
                    ></DeleteUserMedia>
                </div>
            </div>
            <DeleteMedia></DeleteMedia>
        </>
    );
};
