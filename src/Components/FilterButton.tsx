/* eslint-disable indent */
import React from "react";
import { Media } from "../Interfaces";
import classes from "./FilterButton.module.css";
import { BasicDropdown } from "../UI/BasicDropdown";
interface FilterProps {
    //The data we are gonna search In
    MediaData: Media[];
    //The setter Function for the MediaList state in the BrowseMedia
    onFilter: (mediaList: Media[]) => void;
}

export function FilterButton({
    MediaData,
    onFilter
}: FilterProps): JSX.Element {
    function handleFilter(sortType: string) {
        if (sortType === "") {
            onFilter([...MediaData]);
        }
        if (sortType === "Alphabetically") {
            onFilter(MediaData.sort((a, b) => a.title.localeCompare(b.title)));
        }
        if (sortType === "hightolow") {
            onFilter(
                MediaData.sort((a: Media, b: Media) => b.rating - a.rating)
            );
        }
        if (sortType === "lowtohigh") {
            onFilter(
                MediaData.sort((a: Media, b: Media) => a.rating - b.rating)
            );
        }
        if (sortType === "Show") {
            onFilter(MediaData.filter((media) => media.type === "Show"));
        }
        if (sortType === "Movie") {
            onFilter(MediaData.filter((media) => media.type === "Movie"));
        }
    }
    function sortAlphabetically() {
        handleFilter("Alphabetically");
    }

    function sortLowToHigh() {
        handleFilter("lowtohigh");
    }

    function sortHighToLow() {
        handleFilter("hightolow");
    }

    function sortShow() {
        handleFilter("Show");
    }
    function sortMovie() {
        handleFilter("Movie");
    }

    const handleSort = (option: string) => {
        switch (option) {
            case "Alphabetically":
                sortAlphabetically();
                break;
            case "High to Low Ratings":
                sortHighToLow();
                break;
            case "Low to High Ratings":
                sortLowToHigh();
                break;
            case "Show":
                sortShow();
                break;
            case "Movie":
                sortMovie();
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <div className={classes.flexContainer}>
                <BasicDropdown
                    items={[
                        "Alphabetically",
                        "High to Low Ratings",
                        "Low to High Ratings",
                        "Show",
                        "Movie"
                    ]}
                    title={"Sort Media"}
                    onClick={(option) => handleSort(option)}
                />
            </div>
        </div>
    );
}
