/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Slider } from "../Components/Slider/Slider";
import { SearchBar } from "../Components/Search";
import { mediaData } from "../MediaData";
import { Media, Role } from "../Interfaces";
import RenderMedia from "../Components/RenderMedia";
// import { FilterButton } from "../Components/FilterButton";
import "./Header.css";
import { FaStar } from "react-icons/fa";
import { GiFlexibleLamp } from "react-icons/gi";
import { updateWatchedMediaForUser } from "../UserData";

interface FavoriteMediaProps {
    userName: string;
    superTitles: string[];
    handleEdits: (titles: string[]) => void;
    role: Role;
}

export const BrowseMedia = ({
    userName,
    superTitles,
    handleEdits,
    role
}: FavoriteMediaProps): JSX.Element => {
    //The MediaData
    const [mediaList, setMediaList] = useState<Media[]>(mediaData);
    //Function to change mediaList in other components
    function handleRender(mediaList: Media[]) {
        setMediaList([...mediaList]);
    }

    const [edits, setEdits] = useState<string[]>(superTitles);
    const [starColor, setStarColor] = useState<string>("black");
    const [favMedia, setFavMedia] = useState<Media[]>([]);

    // function handleFavMedia(title: string) {
    //     setFavMedia([...favMedia, FindMedia(title)]);
    //     updateWatchedMediaForUser(userName, [...favMedia]);
    // }

    function handleOnFavoritesDrop(e: React.DragEvent) {
        const newFavorite = e.dataTransfer.getData("newMedia") as string;
        // handleFavMedia(newFavorite);
        setFavMedia([...favMedia, FindMedia(newFavorite)]);
        updateWatchedMediaForUser(userName, [FindMedia(newFavorite)]);
        setStarColor("black");
    }
    function handleOnEditsDrop(e: React.DragEvent) {
        const newEdit = e.dataTransfer.getData("newMedia") as string;
        if (!superTitles.includes(newEdit)) {
            setEdits([...edits, newEdit]);
            handleEdits([...edits, newEdit]);
            console.log([...edits, newEdit]);
            setStarColor("black");
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
            <h1>Here is your FavMedia</h1>
            {<RenderMedia MediaData={favMedia} />}
            <br></br>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {<RenderMedia MediaData={mediaList} />}
            {role !== "Super" && role !== "Admin" ? (
                <div onDrop={handleOnFavoritesDrop} onDragOver={handleDragOver}>
                    <div className="header-container">
                        <h1>
                            <FaStar style={{ color: starColor }} />
                        </h1>
                    </div>
                    <br />
                </div>
            ) : (
                <></>
            )}

            {role === "Super" || role === "Admin" ? (
                <div onDrop={handleOnEditsDrop} onDragOver={handleDragOver}>
                    <div className="header-container">
                        <GiFlexibleLamp
                            style={{ color: starColor, fontSize: "24px" }}
                        />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </section>
    );
};
export function FindMedia(searchTerm: string) {
    const filteredData = mediaData.filter(
        (media) => media.title.toLowerCase() === searchTerm.toLowerCase()
    );
    return filteredData[0];
}
