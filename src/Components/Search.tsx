/* eslint-disable indent */
import React, { useState } from "react";
import { Media } from "../Interfaces";
import { mediaData } from "../MediaData";
import ListUI from "../Pages/RenderMedia";
import clasess from "./Search.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import classes from "./Search.module.css";

export function SearchBar(): JSX.Element {
    const [currentSearchTerm, setCurrentSearchTerm] = useState<string>("");
    const [currentSortType, setCurrentSortType] = useState<string>("default");
    const [list, setList] = useState<Media[]>(mediaData);

    // compareFunction?: (a: Media, b: Media) => number
    function setListHelper(searchTerm: string, sortType: string) {
        if (searchTerm === "") {
            setList([...mediaData].sort(sortCompareFunction(sortType)));
        } else {
            setList(
                mediaData
                    .filter((x: Media): boolean =>
                        x.title.toLowerCase().includes(searchTerm)
                    )
                    .sort(sortCompareFunction(sortType))
            );
        }
    }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentSearchTerm(event.target.value.toLowerCase());
        setListHelper(event.target.value.toLowerCase(), currentSortType);
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

        // default
        return;
    }
    function sortAlphabetically() {
        setCurrentSortType("alphabetically");
        setListHelper(currentSearchTerm, "alphabetically");
    }
    function sortLowToHigh() {
        setCurrentSortType("lowtohigh");
        setListHelper(currentSearchTerm, "lowtohigh");
    }
    function sortHighToLow() {
        setCurrentSortType("hightolow");
        setListHelper(currentSearchTerm, "hightolow");
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }} className="heading-primary">
                Browse Media
            </h1>
            <br />
            <div className={clasess.flexContainer}>
                <div>{/* Left Column for spacing*/}</div>
                <div className={clasess.flexContainer}>
                    <div className={classes.flexPadding}>
                        <div className={clasess.container}>
                            <input
                                type="text"
                                placeholder="Search Media"
                                className={clasess.input}
                                onChange={handleInputChange}
                            />
                            <button className={clasess.button}>
                                <svg
                                    xmlns=""
                                    viewBox="0 0 24 24"
                                    fill="black"
                                    width="24px"
                                    height="24px"
                                >
                                    <path d="M0 0h24v24H0z" fill="None" />
                                    <path d="M10.996 15.5A5.978 5.978 0 0 1 11 13h2v2h-2v.5zM17 11h-.38l-.67-.66A6.96 6.96 0 0 0 19 6.978V6h2v.978A6.96 6.96 0 0 0 17 11zm4.293-6.293l-1.414 1.414C17.528 5.746 15.296 5 13 5a9.957 9.957 0 0 0-6.516 2.398L4.22 6.22A11.932 11.932 0 0 1 13 3c2.29 0 4.526.646 6.293 1.707z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={classes.flexPadding}>
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="secondary"
                                className={classes.sort + " rounded-pill"}
                            >
                                Sort Media
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={classes.dropdown}>
                                <Dropdown.Item onClick={sortAlphabetically}>
                                    Alphabetically
                                </Dropdown.Item>
                                <Dropdown.Item onClick={sortHighToLow}>
                                    High to Low Ratings
                                </Dropdown.Item>
                                <Dropdown.Item onClick={sortLowToHigh}>
                                    Low to High Ratings
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div>{/* Right Column for spacing*/}</div>
            </div>
            <div>
                <ListUI MediaData={list}></ListUI>
            </div>
        </div>
    );
}
