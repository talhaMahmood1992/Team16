import React from "react";
import { Slider } from "../Components/Slider/Slider";
import { SearchBar } from "../Components/Search";

export const BrowseMedia = (): JSX.Element => {
    return (
        <section className="page">
            <div className="HeroSection_section_hero__bCGwu">
                <Slider />
            </div>
            <SearchBar></SearchBar>
        </section>
    );
};
