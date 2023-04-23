import React, { useState } from "react";
import { Slider } from "../Components/Slider/Slider";
import { SearchBar } from "../Components/Search";
import { mediaData, Media } from "../MediaData";
import RenderMedia from "./RenderMedia";

export const BrowseMedia = (): JSX.Element => {
    const [mediaList, setMediaList] = useState<Media[]>(mediaData);
    // const handleMediaListChange = (newList: Media[]): void => {
    //     setMediaList(newList);
    // };

    return (
        <section className="page">
            <div className="HeroSection_section_hero__bCGwu">
                <Slider />
            </div>
            <SearchBar mediaList={mediaList} setMediaList={setMediaList} />
            {<RenderMedia MediaData={mediaList} />}
        </section>
    );
};
