import Card from "react-bootstrap/Card";
import React from "react";
import { mediaData } from "../App";
import classes from "./BrowseMedia.module.css";

const mediaToElement = (media: {
    title: string;
    type: string;
    yearReleased: number;
    rating: number;
    movieId: string;
}) => {
    return (
        <div>
            <Card
                border="dark"
                style={{ margin: "20px auto", width: "50%" }}
                id={media.movieId}
            >
                <Card.Img
                    variant="top"
                    //update image once they are added

                    src={"favicon.ico"}
                    style={{
                        height: "50px",
                        width: "50px",
                        margin: "5px auto"
                    }}
                />
                <Card.Body>
                    {"Name: " + media.title + " (" + media.type + ")"}
                    <br />
                    {"Released: " + media.yearReleased}
                    <br />
                    {"Rated " + media.rating + " / 5"}
                </Card.Body>
            </Card>
        </div>
    );
};

export const BrowseMedia = (): JSX.Element => {
    return (
        <div className={classes.media_display}>
            <h1 style={{ textAlign: "center" }}>Browse Media</h1>
            <div>
                {mediaData.map(
                    (media: {
                        title: string;
                        type: string;
                        yearReleased: number;
                        rating: number;
                        movieId: string;
                    }): JSX.Element => mediaToElement(media)
                )}
            </div>
        </div>
    );
};
