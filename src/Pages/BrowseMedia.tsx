import React, { useState } from "react";
import { Slider } from "../Components/Slider/Slider";
import { SearchBar } from "../Components/Search";
import { mediaData, Media } from "../MediaData";
import RenderMedia from "./RenderMedia";

export const BrowseMedia = (): JSX.Element => {
    const [mediaList, setMediaList] = useState<Media[]>(mediaData);
    function handleSearch(mediaList: Media[]) {
        setMediaList([...mediaList]);
    }

    return (
        <section className="page">
            <div className="HeroSection_section_hero__bCGwu">
                <Slider />
            </div>
            <SearchBar onSearch={handleSearch} MediaData={mediaData} />
            {<RenderMedia MediaData={mediaList} />}
        </section>
    );
};
