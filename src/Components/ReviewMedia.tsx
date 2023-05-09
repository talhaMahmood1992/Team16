import React, { useState } from "react";
//import { Media, PersonalMedia } from "../Interfaces";
import { Form } from "react-bootstrap";

const [review, setReview] = useState<string>("");

function updateReview(event: React.ChangeEvent<HTMLInputElement>) {
    setReview(event.target.value);
}

export const ReviewMedia = (): JSX.Element => {
    return (
        <div>
            <Form.Group>
                <Form.Label>Review:</Form.Label>
                <Form.Control value={review} onChange={updateReview} />
            </Form.Group>
        </div>
    );
};
