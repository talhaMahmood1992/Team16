/* eslint-disable no-extra-parens */
import React, { useEffect, useState } from "react";
import { Slider } from "../Components/Slider/Slider";
import { SearchBar } from "../Components/Search";
import { mediaData } from "../MediaData";
import { Media, Role } from "../Interfaces";
import RenderMedia from "../Components/RenderMedia";
// import { FilterButton } from "../Components/FilterButton";
import "./Header.css";
import { FaStar } from "react-icons/fa";
import { GiFlexibleLamp } from "react-icons/gi";
import axios from "axios";

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
    useEffect(() => {
        const getMediaData = async () => {
            try {
                const mediaData = await axios.get(
                    "https://team16-c5r2.onrender.com/media"
                );
                // console.log("DATA PRINT");
                console.log(mediaData["data"]["data"]["media"]);
            } catch (error) {
                console.log(error);
            }
        };
        getMediaData();
    }, []);

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
            {/* <FilterButton MediaData={mediaData} onFilter={handleRender} /> */}
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
