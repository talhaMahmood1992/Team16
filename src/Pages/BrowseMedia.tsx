/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Slider } from "../Components/Slider/Slider";
import { mediaData } from "../MediaData";
import { Media, Role } from "../Interfaces";
import RenderMedia from "../Components/RenderMedia";
import "./Header.css";
import { FaStar } from "react-icons/fa";
import { GiFlexibleLamp } from "react-icons/gi";
import { updateWatchedMediaForUser } from "../UserData";
import { SearchBar } from "../Components/SearchAndFilter/SearchBar";
import { FilterButton } from "../Components/SearchAndFilter/FilterButton";
import { useFetchList } from "../hooks/useFetchList";
import { getMediaData } from "../api/mediaApi";

interface FavoriteMediaProps {
    //UserName of the CurrentUser
    userName: string;
    superTitles: string[];
    handleEdits: (titles: string[]) => void;
    //Role of the current User
    role: Role;
}

export const BrowseMedia = ({
    userName,
    superTitles,
    handleEdits,
    role
}: FavoriteMediaProps): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [mediaList, loading, error, setMediaList] = useFetchList(
        getMediaData,
        "media",
        searchQuery
    );
    // const [mediaList, setMediaList] = useState<Media[]>([]);
    // function handleRender(mediaList: Media[]) {
    //     setMediaList([...mediaList]);
    // }
    const [edits, setEdits] = useState<string[]>(superTitles);
    const [starColor, setStarColor] = useState<string>("black");
    const [favMedia, setFavMedia] = useState<Media[]>([]);

    function handleOnFavoritesDrop(e: React.DragEvent) {
        const newFavorite = e.dataTransfer.getData("newMedia") as string;
        //Update the state and then update the userData
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
            <SearchBar setSearchQuery={setSearchQuery} />
            <FilterButton setSearchQuery={setSearchQuery} />
            {!loading && (
                <RenderMedia
                    MediaData={mediaList}
                    setMediaList={setMediaList}
                />
            )}
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
