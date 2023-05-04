/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Slider } from "../Components/Slider/Slider";
import { SearchBar } from "../Components/Search";
import { mediaData } from "../MediaData";
import { Media, Role } from "../Interfaces";
import RenderMedia from "../Components/RenderMedia";
import { FilterButton } from "../Components/FilterButton";
import "./Header.css";
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
    const [mediaList, setMediaList] = useState<Media[]>(mediaData);
    function handleRender(mediaList: Media[]) {
        setMediaList([...mediaList]);
    }

    const [favorites, setFavorites] = useState<string[]>(favTitles);
    const [edits, setEdits] = useState<string[]>(superTitles);
    function handleOnFavoritesDrop(e: React.DragEvent) {
        const newFavorite = e.dataTransfer.getData("newMedia") as string;
        setFavorites([...favorites, newFavorite]);
        handleFavorites([...favorites, newFavorite]);
        console.log([...favorites, newFavorite]);
    }
    function handleOnEditsDrop(e: React.DragEvent) {
        const newEdit = e.dataTransfer.getData("newMedia") as string;
        setEdits([...edits, newEdit]);
        handleEdits([...edits, newEdit]);
        console.log([...edits, newEdit]);
    }
    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    return (
        <section className="page">
            <div className="HeroSection_section_hero__bCGwu">
                <Slider />
            </div>
            <SearchBar onSearch={handleRender} MediaData={mediaData} />
            <FilterButton MediaData={mediaData} onFilter={handleRender} />
            {<RenderMedia MediaData={mediaList} />}
            <div className="header-container">
                <div onDrop={handleOnFavoritesDrop} onDragOver={handleDragOver}>
                    <h1>Add To Favorites!</h1>
                    <ul>
                        {favorites.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>{" "}
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
