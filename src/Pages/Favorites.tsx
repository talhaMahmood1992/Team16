/* eslint-disable no-extra-parens */
import React, { useContext } from "react";
import { getUserWatchlists } from "../api/usersApi";
import { CurrentUserContext } from "../store/currentUserContext";
import { useFetchWatchlists } from "../hooks/useFetchWatchlists";
// import RenderMedia from "../Components/RenderMedia";
import { MediaInterface } from "../interfaces/MediaInterface";
import { SpecialRating } from "../Components/MediaRating";
import { ToDeleteMedia } from "../Components/DeleteMedia";
// import { MediaInterface } from "../interfaces/MediaInterface";
// import { removeImageFromMedia, removeMediaId } from "../utils/media-config";
// import { NavLink } from "react-router-dom";
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
        //To change the color of the star when the image can be dragged into the favoritesList
    }

    function handleOnDropToWatch(e: React.DragEvent) {
        console.log("here ");
        const MediaToMove = e.dataTransfer.getData("mediaId") as string;
        console.log(MediaToMove, "Will be added to ToWatch");
        //Set the color of the star back to the original one
        // setTrashColor("black");
        // console.log(toWatch);
        // console.log(watched);

        // updateDeletedMedia(FindMedia(toDelete));
    }
    function handleOnDropWatched(e: React.DragEvent) {
        console.log("here ");
        const MediaToMove = e.dataTransfer.getData("mediaId") as string;
        console.log(MediaToMove, "Will be added to Watched");
        //Set the color of the star back to the original one
        // setTrashColor("black");
        // console.log(toWatch);
        // console.log(watched);

        // updateDeletedMedia(FindMedia(toDelete));
    }

    const MediaToButton = (
        mediaItem: MediaInterface
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ): JSX.Element => {
        return (
            <div
                key={mediaItem["mediaId"]}
                className="media-item"
                data-testid="mediaItem"
                draggable
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                onDragStart={(e) => handleOnDrag(e, mediaItem["title"]!)}
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
            <section className="page">
                <h2 className="heading-secondary">My Favorites</h2>
            </section>
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
                        toWatch.map((mediaItem) => MediaToButton(mediaItem))}
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
                </div>
            </div>

            <ToDeleteMedia></ToDeleteMedia>
        </>
    );
};
