import React, { useState } from "react";
import { Slider } from "../Components/Slider/Slider";
import { SearchBar } from "../Components/Search";
import { mediaData } from "../MediaData";
import { Media } from "../Interfaces";
import RenderMedia from "../Components/RenderMedia";
import { FilterButton } from "../Components/FilterButton";
import "./Header.css";
export const BrowseMedia = (): JSX.Element => {
    const [mediaList, setMediaList] = useState<Media[]>(mediaData);
    function handleRender(mediaList: Media[]) {
        setMediaList([...mediaList]);
    }

    const [favorites, setFavorites] = useState<string[]>([]);
    function handleOnDrop(e: React.DragEvent) {
        const newFavorite = e.dataTransfer.getData("newFavorite") as string;
        setFavorites([...favorites, newFavorite]);
        console.log([...favorites, newFavorite]);
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
                <div onDrop={handleOnDrop} onDragOver={handleDragOver}>
                    <h1>Right Here!</h1>
                    <h2>{favorites.join(", ")}</h2>
                </div>
            </div>
        </section>
    );
};
