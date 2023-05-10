import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Role } from "../Interfaces";
import { NavLink } from "react-router-dom";

interface ReviewerInterfaceProps {
    role: Role;
    review: string;
    setter: React.Dispatch<React.SetStateAction<string>>;
}
/*
function updateReview(event: React.ChangeEvent<HTMLInputElement>) {
    setReview(event.target.value);
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
                to="/mediaRevision"
                onClick={() => prepareRevision(mediaItem, setter)}
            >
                <p>Edit This Media</p>
            </NavLink>
        </div>
    );
};
*/
export const ReviewerInterface = (
    props: ReviewerInterfaceProps
): JSX.Element => {
    const navigate = useNavigate();
    useEffect(() => {
        if (props.role != "Default") {
            navigate("/");
        }
    }, [props.role]);
    return (
        <div>
            <h2>Review Media</h2>
            <Form.Control value={props.review} />
            <NavLink to="/mediaRevision">
                <p>Edit This Media</p>
            </NavLink>
        </div>
    );
};

/*
interface EditInterfaceProps {
    role: Role;
    media: Media;
}

export const EditorInterface = (props: EditInterfaceProps): JSX.Element => {
    const navigate = useNavigate();
    useEffect(() => {
        if (props.role == "Default") {
            navigate("/");
        }
    }, [props.role]);
    return (
        <>
            <h2 className="heading-secondary">Edit Media</h2>
            <EditMediaForm media={props.media} />
        </>
    );
};
*/
