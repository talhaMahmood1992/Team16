import Card from "react-bootstrap/Card";
import React from "react";
import { mediaData } from "../MediaData";
import { Slider } from "../Components/Slider/Slider";
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
                style={{
                    margin: "20px auto",
                    width: "50%"
                }}
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
                    <h1 className="card-title">
                        <p>{"Name: " + media.title}</p>
                    </h1>
                    <h5 className="card-title">
                        {"Type: " + media.type}
                        <br />
                        {"Released: " + media.yearReleased}
                        <br />
                        {"Rated " + media.rating + " / 5"}
                    </h5>
                    <br />
                </Card.Body>
            </Card>
        </div>
    );
};

export const BrowseMedia = (): JSX.Element => {
    return (
        <section className="page">
            <div className="HeroSection_section_hero__bCGwu">
                <h1 style={{ textAlign: "center" }} className="heading-primary">
                    Browse Media
                </h1>
                <Slider />
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
        </section>
    );
};
