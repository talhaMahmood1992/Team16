/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Slider } from "../Components/Slider/Slider";
import { SearchBar } from "../Components/Search";
import { mediaData } from "../MediaData";
import { Media, Role } from "../Interfaces";
import RenderMedia from "../Components/RenderMedia";
import { FilterButton } from "../Components/FilterButton";
import "./Header.css";
import { FaStar } from "react-icons/fa";

interface FavoriteMediaProps {
    favTitles: string[];
    superTitles: string[];
    handleFavorites: (titles: string[]) => void;
    handleEdits: (titles: string[]) => void;
    role: Role;
}

export const BrowseMedia = ({
    favTitles,
    superTitles,
    handleFavorites,
    handleEdits,
    role
}: FavoriteMediaProps): JSX.Element => {
    //The MediaData
    const [mediaList, setMediaList] = useState<Media[]>(mediaData);
    //Function to change mediaList in other components
    function handleRender(mediaList: Media[]) {
        setMediaList([...mediaList]);
    }

    const [favorites, setFavorites] = useState<string[]>(favTitles);
    const [edits, setEdits] = useState<string[]>(superTitles);
    const [starColor, setStarColor] = useState<string>("black");
    function handleOnFavoritesDrop(e: React.DragEvent) {
        const newFavorite = e.dataTransfer.getData("newMedia") as string;
        setFavorites([...favorites, newFavorite]);
        handleFavorites([...favorites, newFavorite]);

        //Set the color of the star back to the original one
        setStarColor("black");
    }
    function handleOnEditsDrop(e: React.DragEvent) {
        const newEdit = e.dataTransfer.getData("newMedia") as string;
        if (!superTitles.includes(newEdit)) {
            setEdits([...edits, newEdit]);
            handleEdits([...edits, newEdit]);
            console.log([...edits, newEdit]);
        }
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
            {<RenderMedia MediaData={mediaList} />}
            <div onDrop={handleOnFavoritesDrop} onDragOver={handleDragOver}>
                <div className="header-container">
                    <h1>
                        <FaStar style={{ color: starColor }} />
                    </h1>
                </div>
                <br />
                {role !== "Default" ? (
                    <div onDrop={handleOnEditsDrop} onDragOver={handleDragOver}>
                        <h1>Add to Edits</h1>
                        <ul>
                            {edits.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>{" "}
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </section>
    );
};
