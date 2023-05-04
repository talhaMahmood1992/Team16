import React, { useState } from "react";
import { Slider } from "../Components/Slider/Slider";
import { SearchBar } from "../Components/Search";
import { mediaData } from "../MediaData";
import { Media } from "../Interfaces";
import RenderMedia from "../Components/RenderMedia";
import { FilterButton } from "../Components/FilterButton";
import "./Header.css";
import { FaStar } from "react-icons/fa";

interface FavoriteMediaProps {
    //Because the media is dragged by the title
    titles: string[];
    handleFavorites: (titles: string[]) => void;
}

export const BrowseMedia = ({
    titles,
    handleFavorites
}: FavoriteMediaProps): JSX.Element => {
    //The MediaData
    const [mediaList, setMediaList] = useState<Media[]>(mediaData);
    //Function to change mediaList in other components
    function handleRender(mediaList: Media[]) {
        setMediaList([...mediaList]);
    }
    //The list were we are dragging//adding the movies
    const [favorites, setFavorites] = useState<string[]>(titles);
    //The color for the star
    const [starColor, setStarColor] = useState<string>("black");

    function handleOnDrop(e: React.DragEvent) {
        const newFavorite = e.dataTransfer.getData("newFavorite") as string;
        setFavorites([...favorites, newFavorite]);
        handleFavorites([...favorites, newFavorite]);

        //Set the color of the star back to the original one
        setStarColor("black");
    }
    //To change the color of the star when the image can be dragged into the favoritesList
    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
        setStarColor("green");
    }

    return (
        <section className="page">
            <div className="HeroSection_section_hero__bCGwu">
                <Slider />
            </div>
            <SearchBar onSearch={handleRender} MediaData={mediaData} />
            <FilterButton MediaData={mediaData} onFilter={handleRender} />
            <RenderMedia MediaData={mediaList} />
            <div
                className="header-container"
                onDrop={handleOnDrop}
                onDragOver={handleDragOver}
            >
                <h1>
                    <FaStar style={{ color: starColor }} />
                </h1>
            </div>
        </section>
    );
};
