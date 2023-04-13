import Card from "react-bootstrap/Card";
import React from "react";
import { mediaData } from "../App";

const mediaToElement = (media: {
    title: string;
    type: string;
    yearReleased: number;
    rating: number;
    movieId: string;
    image: string;
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

                    src={media.image}
                    style={{
                        height: "200px",
                        width: "135px",
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
        <div className="HeroSection_section_hero__bCGwu">
            <h1 style={{ textAlign: "center" }}>Browse Media</h1>
            <div>
                {mediaData.map(
                    (media: {
                        title: string;
                        type: string;
                        yearReleased: number;
                        rating: number;
                        movieId: string;
                        image: string;
                    }): JSX.Element => mediaToElement(media)
                )}
            </div>
        </div>
    );
};
