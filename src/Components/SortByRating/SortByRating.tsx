/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import { BasicDropdown } from "../../UI/BasicDropdown";
export interface SortByRatingProps {
    setRatingQuery: (query: string) => void;
}

export function SortByRating({
    setRatingQuery
}: SortByRatingProps): JSX.Element {
    const [rating, setRating] = useState<string>("");

    useEffect(() => {
        switch (rating) {
            case "High to Low":
                setRatingQuery("?sort=rating");
                break;
            case "Low to High":
                setRatingQuery("?sort=-rating");
                break;
            default:
                setRatingQuery("");
                break;
        }
    }, [rating]);

    return (
        <div>
            <div data-testid="sort-by-rating">
                <BasicDropdown
                    items={["High to Low", "Low to High"]}
                    title={"Rating"}
                    onClick={setRating}
                />
            </div>
        </div>
    );
}
