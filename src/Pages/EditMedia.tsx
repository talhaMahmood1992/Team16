/* eslint-disable no-extra-parens */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Media, Role } from "../Interfaces";
import RatingFeature from "../Components/MediaRatting";
import { FindMedia } from "./Favorites";
import { NavLink } from "react-router-dom";
interface EditMediaPageProps {
    role: Role;
    titles: string[];
}

const MediaToButton = (mediaItem: Media): JSX.Element => {
    return (
        <div key={mediaItem.movieId} className="media-item">
            <img src={mediaItem.image} alt={mediaItem.title} />
            <div className="media-details">
                <p className="media-year" data-testid="mediaYear">
                    {mediaItem.yearReleased}
                </p>
                <div className="media-rating">
                    {<RatingFeature rating={mediaItem.rating}></RatingFeature>}
                </div>
            </div>
            <NavLink to="/mediaRevision">
                <p>Edit This Media</p>
            </NavLink>
        </div>
    );
};
export default function ListToButons({
    MediaData
}: {
    MediaData: Media[];
}): JSX.Element {
    const mediaList = MediaData.map((Media) => {
        return {
            ...Media
        };
    });
    return (
        <div className="media-list-container" data-testid="mediaListContainer">
            <div className="media-list">
                {mediaList.map((mediaItem) => MediaToButton(mediaItem))}
            </div>
        </div>
    );
}
function RenderSelectedMediaButtons(props: EditMediaPageProps) {
    const filteredMedia = props.titles.map((title: string) => FindMedia(title));
    return (
        <div>
            <ListToButons MediaData={filteredMedia} />
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
            />
        </>
    );
};
