import React, { useState } from "react";
import { Media } from "../MediaData";
//import ListUI from "../Pages/RenderMedia";
import classes from "./Search.module.css";

interface SearchProps {
    mediaList: Media[];
    //  setVisible: (newVisibility: boolean) => void

    setMediaList: React.Dispatch<React.SetStateAction<Media[]>>;
}

export function SearchBar({
    mediaList,
    setMediaList
}: SearchProps): JSX.Element {
    const [searchText, setSearchText] = useState("");

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const searchValue = event.target.value.toLowerCase().trim();
        if (searchValue === "") {
            setMediaList([]);
        }
        const filteredMedia = mediaList.filter(
            (media) =>
                media.title.toLowerCase().includes(searchValue) ||
                media.type.toLowerCase().includes(searchValue) ||
                media.yearReleased
                    .toString()
                    .toLowerCase()
                    .includes(searchValue)
        );
        setMediaList(filteredMedia);
        setSearchText(event.target.value);
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }} className="heading-primary">
                Browse Media
            </h1>
            <div className={classes.container}>
                <input
                    type="text"
                    placeholder="Search Media"
                    className={classes.input}
                    value={searchText}
                    onChange={handleSearch}
                />
            </div>
        </div>
    );
}
