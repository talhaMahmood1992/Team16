/* eslint-disable no-extra-parens */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Media, Role } from "../Interfaces";
import RatingFeature from "../Components/MediaRating";
import { FindMedia } from "./BrowseMedia";
import { NavLink } from "react-router-dom";
interface EditMediaPageProps {
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
            <p>
                {mediaItem.genres[0]}
                {mediaItem.genres.length > 1 ? "," : ""} {mediaItem.genres[1]}
            </p>
            <NavLink
                to="/mediaRevision"
                onClick={() => prepareRevision(mediaItem, setter)}
            >
                <p>Edit This Media</p>
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
function RenderSelectedMediaButtons(props: EditMediaPageProps) {
    const filteredMedia = props.titles.map((title: string) => FindMedia(title));
    return (
        <div>
            <ListToButons MediaData={filteredMedia} setter={props.setter} />
        </div>
    );
}

export const EditMediaPage = (props: EditMediaPageProps): JSX.Element => {
    const navigate = useNavigate();
    useEffect(() => {
        if (props.role == "Default") {
            navigate("/");
        }
    }, [props.role]);
    return (
        <>
            <h2 className="heading-secondary">Edit Media</h2>
            <RenderSelectedMediaButtons
                titles={props.titles}
                role={props.role}
                setter={props.setter}
            />
        </>
    );
};
