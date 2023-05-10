/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import classes from "./SearchBar.module.css";
import { IoSearchCircleSharp } from "react-icons/io5";
import slugify from "react-slugify";

interface SearchProps {
    setSearchQuery: (query: string) => void;
}

export function SearchBar({ setSearchQuery }: SearchProps): JSX.Element {
    const [searchText, setSearchText] = useState<string>("");

    const searchTextChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchText(event.target.value);
        searchQueryHandler(event.target.value);
    };

    const searchQueryHandler = (searchText: string) => {
        const slugifiedSearchText = slugify(searchText);
        if (searchText) {
            setSearchQuery(`?search=${slugifiedSearchText}`);
        } else {
            setSearchQuery("");
        }
    };

    return (
        <div>
            <h3 style={{ marginBottom: "1.25rem" }}></h3>
            <div className={classes.container}>
                <input
                    type="text"
                    placeholder="Search Media"
                    className={classes.input}
                    value={searchText}
                    onChange={(event) => searchTextChangeHandler(event)}
                />
                <div data-testid="search-icon">
                    <IoSearchCircleSharp
                        className={classes.icon}
                        size={15}
                        style={{ fill: "black" }}
                    />
                </div>
            </div>
        </div>
    );
}
