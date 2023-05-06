/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Media } from "../Interfaces";
import classes from "./Search.module.css";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FilterButton } from "./FilterButton";
import { mediaData } from "../MediaData";

interface SearchProps {
    //The data we are gonna search In
    MediaData: Media[];
    //The setter Function for the MediaList state in the BrowseMedia
    onSearch: (mediaList: Media[]) => void;
}

export function SearchBar({ MediaData, onSearch }: SearchProps): JSX.Element {
    //The Text in the SearchBar
    const [searchText, setSearchText] = useState("");

    const [data, setData] = useState<Media[]>(MediaData);
    function handleData(mediaList: Media[]) {
        onSearch([...mediaList]);
        setData([...mediaList]);
    }

    //Handles all the Search, filtering the MediaData, and setting the MediaList state in
    //the BrowseMedia.tsx using the onSearch function
    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const searchValue = event.target.value;
        setSearchText(searchValue);

        if (searchValue === "") {
            //If nothing, the state is set to All the mediaData
            // onSearch(mediaData);
            handleData(mediaData);
            return;
        } else {
            //Filtering the Data based on the text input in the SearchBar
            const filteredMedia = data.filter(
                (media) =>
                    //Search By tile
                    media.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase()) ||
                    //Search By type
                    media.type
                        .toLowerCase()
                        .includes(searchValue.toLowerCase()) ||
                    //Search By year
                    media.yearReleased
                        .toString()
                        .toLowerCase()
                        .includes(searchValue.toLowerCase()) ||
                    //Search By genre
                    media.genres
                        .toString()
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
            );
            //Setting the state to the FilteredData from the MediaData
            // onSearch([...filteredMedia]);
            handleData([...filteredMedia]);
        }
    }

    return (
        <div>
            <h3 style={{ marginBottom: "1.25rem" }}></h3>
            <div className={classes.container}>
                <input
                    type="text"
                    placeholder="Search Media"
                    className={classes.input}
                    value={searchText}
                    onChange={handleSearch}
                />
                <div data-testid="search-icon">
                    <IoSearchCircleSharp
                        className={classes.icon}
                        size={15}
                        style={{ fill: "black" }}
                    />
                </div>
            </div>
            {searchText === "" ? (
                <FilterButton MediaData={mediaData} onFilter={handleData} />
            ) : (
                <FilterButton MediaData={data} onFilter={handleData} />
            )}
        </div>
    );
}
