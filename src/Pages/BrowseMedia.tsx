import React, { useState } from "react";
import { Slider } from "../Components/Slider/Slider";
import { SearchBar } from "../Components/Search";
import { mediaData } from "../MediaData";
import { Media } from "../Interfaces";
import RenderMedia from "../Components/RenderMedia";
import { FilterButton } from "../Components/FilterButton";
export const BrowseMedia = (): JSX.Element => {
    const [mediaList, setMediaList] = useState<Media[]>(mediaData);
    function handleRender(mediaList: Media[]) {
        setMediaList([...mediaList]);
    }

    const [widgets, setWidgets] = useState<string[]>([]);
    function handleOnDrop(e: React.DragEvent) {
        const widgetType = e.dataTransfer.getData("widgetType") as string;
        setWidgets([...widgets, widgetType]);
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
            <div onDrop={handleOnDrop} onDragOver={handleDragOver}>
                <h1>Right Here!</h1>
                <h2>{widgets}</h2>
            </div>
        </section>
    );
};
