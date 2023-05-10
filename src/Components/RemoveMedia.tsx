/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { getUserByUsername, updateDeletedWatchedMedia } from "../UserData";
import { useNavigate } from "react-router-dom";
import { mediaData } from "../MediaData";
import { Media, UserInterface, Role } from "../Interfaces";
import RenderMedia from "./RenderMedia";
import RatingFeature from "./MediaRatting";
import { NavLink } from "react-router-dom";
import { FindMedia } from "../Pages/BrowseMedia";
interface FavoriteMediaProps {
    userName: string;
    role: Role;
    titles: string[];
    setter: React.Dispatch<React.SetStateAction<Media>>;
}
const prepareRevision = (
    media: Media,
    setter: React.Dispatch<React.SetStateAction<Media>>
) => {
    setter(media);
};
const MediaToButton = (
    mediaItem: Media,
    setter: React.Dispatch<React.SetStateAction<Media>>
): JSX.Element => {
    return (
        <div key={mediaItem._id} className="media-item">
            <img src={mediaItem.image} alt={mediaItem.title} />
            <div className="media-details">
                <p className="media-year" data-testid="mediaYear">
                    {mediaItem.yearReleased}
                </p>
                <div className="media-rating">
                    {<RatingFeature rating={mediaItem.rating}></RatingFeature>}
                </div>
            </div>
            <NavLink
                to="/mediaReview"
                onClick={() => prepareRevision(mediaItem, setter)}
            >
                <p>Review This Media</p>
            </NavLink>
        </div>
    );
};
export default function ListToButons(props: {
    MediaData: Media[];
    setter: React.Dispatch<React.SetStateAction<Media>>;
}): JSX.Element {
    const mediaList = props.MediaData.map((Media) => {
        return {
            ...Media
        };
    });
    return (
        <div className="media-list-container" data-testid="mediaListContainer">
            <div className="media-list">
                {mediaList.map((mediaItem) =>
                    MediaToButton(mediaItem, props.setter)
                )}
            </div>
        </div>
    );
}
function RenderSelectedMediaButtons(props: FavoriteMediaProps) {
    const filteredMedia = props.titles.map((title: string) => FindMedia(title));
    return (
        <div>
            <ListToButons MediaData={filteredMedia} setter={props.setter} />
        </div>
    );
}

export const FavoritesPage = (props: FavoriteMediaProps): JSX.Element => {
    const navigate = useNavigate();
    useEffect(() => {
        if (props.role != "Default") {
            navigate("/");
        }
    }, [props.role]);
    return (
        <>
            <h2 className="heading-secondary">Review Media</h2>
            <RenderSelectedMediaButtons
                userName={props.userName}
                titles={props.titles}
                role={props.role}
                setter={props.setter}
            />
        </>
    );
};

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
            <RenderSelectedMediaButtons
                userName={props.userName}
                titles={props.titles}
                role={props.role}
                setter={props.setter}
            />
        </>
    );

    /*
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
    */
};
