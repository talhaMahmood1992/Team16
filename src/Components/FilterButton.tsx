/* eslint-disable indent */
import React, { useState } from "react";
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
    const [currentSearchTerm, setCurrentSearchTerm] = useState<string>("");
    const [currentSortType, setCurrentSortType] = useState<string>("default");

    function handleFilter(searchTerm: string, sortType: string) {
        if (searchTerm === "") {
            onFilter([...MediaData].sort(sortCompareFunction(sortType)));
        } else {
            onFilter(
                MediaData.filter((x: Media): boolean =>
                    x.title.toLowerCase().includes(searchTerm)
                ).sort(sortCompareFunction(sortType))
            );
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentSearchTerm(event.target.value.toLowerCase());
        handleFilter(event.target.value.toLowerCase(), currentSortType);
    };

    function sortCompareFunction(type: string) {
        if (type.toLowerCase() === "alphabetically") {
            return (a: Media, b: Media) => a.title.localeCompare(b.title);
        }
        if (type.toLowerCase() === "lowtohigh") {
            return (a: Media, b: Media) => a.rating - b.rating;
        }
        if (type.toLowerCase() === "hightolow") {
            return (a: Media, b: Media) => b.rating - a.rating;
        }
    }

    function sortAlphabetically() {
        setCurrentSortType("alphabetically");
        handleFilter(currentSearchTerm, "alphabetically");
    }

    function sortLowToHigh() {
        setCurrentSortType("lowtohigh");
        handleFilter(currentSearchTerm, "lowtohigh");
    }

    function sortHighToLow() {
        setCurrentSortType("hightolow");
        handleFilter(currentSearchTerm, "hightolow");
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
                        "Low to High Ratings"
                    ]}
                    title={"Sort Media"}
                    onClick={(option) => handleSort(option)}
                />
            </div>
        </div>
    );
}
