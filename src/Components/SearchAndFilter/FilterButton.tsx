/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import classes from "./FilterButton.module.css";
import { BasicDropdown } from "../../UI/BasicDropdown";
export interface FilterProps {
    setSearchQuery: (query: string) => void;
}

export function FilterButton({ setSearchQuery }: FilterProps): JSX.Element {
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        switch (filter) {
            case "Alphabetically":
                setSearchQuery("?sort=title");
                break;
            case "High to Low Ratings":
                setSearchQuery("?sort=-rating");
                break;
            case "Low to High Ratings":
                setSearchQuery("?sort=rating");
                break;
            case "Show":
                setSearchQuery("?type=Show");
                break;
            case "Movie":
                setSearchQuery("?type=Movie");
                break;
            default:
                setSearchQuery("");
                break;
        }
    }, [filter]);

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
                    onClick={setFilter}
                />
            </div>
        </div>
    );
}
