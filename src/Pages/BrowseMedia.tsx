/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Slider } from "../Components/Slider/Slider";
import { mediaData } from "../MediaData";
import { Media, Role } from "../Interfaces";
import RenderMedia from "../Components/RenderMedia";
import "./Header.css";
import { FaStar } from "react-icons/fa";
import { VscWatch } from "react-icons/vsc";
import { GiFlexibleLamp } from "react-icons/gi";
import { updateWatchedMediaForUser } from "../UserData";
import { SearchBar } from "../Components/SearchAndFilter/SearchBar";
import { FilterButton } from "../Components/SearchAndFilter/FilterButton";
import { useFetchList } from "../hooks/useFetchList";
import { getMediaData } from "../api/mediaApi";
import { UserWatchlists } from "../Components/UserMedia/UserWatchlist";

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
    const [mediaList, loading] = useFetchList(
        getMediaData,
        "media",
        searchQuery
    );
    const [edits, setEdits] = useState<string[]>(superTitles);
    const [starColor, setStarColor] = useState<string>("black");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [watchColor, setWatchColor] = useState<string>("Green");
    const [favMedia, setFavMedia] = useState<Media[]>([]);
    function FindMedia(searchTerm: string) {
        const filteredData = mediaList.filter(
            (media) => media["_id"] === searchTerm
        );
        return filteredData[0];
    }

    function handleOnFavoritesDrop(e: React.DragEvent) {
        const newFavorite = e.dataTransfer.getData("mediaId") as string;
        //Update the state and then update the userData
        setFavMedia([...favMedia, FindMedia(newFavorite)]);
        console.log("To list", newFavorite);

        console.log("To list", FindMedia(newFavorite));
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
            {!loading && <RenderMedia MediaData={mediaList} />}
            {role !== "Super" && role !== "Admin" ? (
                <div className="header-container">
                    <h1
                        onDrop={handleOnFavoritesDrop}
                        onDragOver={handleDragOver}
                    >
                        <FaStar style={{ color: starColor }} />
                    </h1>
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
                    <h1
                        onDrop={handleOnFavoritesDrop}
                        onDragOver={handleDragOver}
                    >
                        <VscWatch style={{ color: starColor }} />
                    </h1>
                </div>
            ) : (
                <></>
            )}

            {role === "Super" || role === "Admin" ? (
                <div onDrop={handleOnEditsDrop} onDragOver={handleDragOver}>
                    <div className="header-container">
                        <GiFlexibleLamp
                            style={{ color: watchColor, fontSize: "24px" }}
                        />
                    </div>
                </div>
            ) : (
                <></>
            )}
            <UserWatchlists></UserWatchlists>
        </section>
    );
};
export function FindMedia(searchTerm: string) {
    const filteredData = mediaData.filter((media) => media._id === searchTerm);
    return filteredData[0];
}
