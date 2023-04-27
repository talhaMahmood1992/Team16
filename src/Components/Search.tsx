// import React, { useState } from "react";
// import { Media } from "../MediaData";
// import classes from "./Search.module.css";

// interface SearchProps {
//     mediaList: Media[];
//     setMediaList: (mediaList: Media[]) => void;
// }

// export function SearchBar({
//     mediaList,
//     setMediaList
// }: SearchProps): JSX.Element {
//     const [searchText, setSearchText] = useState("");

//     function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
//         const searchValue = event.target.value.toLowerCase().trim();
//         if (searchValue === "") {
//             setMediaList(mediaList);
//         }
//         const filteredMedia = mediaList.filter(
//             (media) =>
//                 media.title.toLowerCase().includes(searchValue) ||
//                 media.type.toLowerCase().includes(searchValue) ||
//                 media.yearReleased
//                     .toString()
//                     .toLowerCase()
//                     .includes(searchValue)
//         );
//         setMediaList([...filteredMedia]);
//         setSearchText(event.target.value);
//     }

//     return (
//         <div>
//             <h1 style={{ textAlign: "center" }} className="heading-primary">
//                 Browse Media
//             </h1>
//             <div className={classes.container}>
//                 <input
//                     type="text"
//                     placeholder="Search Media"
//                     className={classes.input}
//                     value={searchText}
//                     onChange={handleSearch}
//                 />
//             </div>
//         </div>
//     );
// }
import React, { useState } from "react";
import { Media } from "../Interfaces";
import classes from "./Search.module.css";
import { IoSearchCircleSharp } from "react-icons/io5";

interface SearchProps {
    //The data we are gonna search In
    MediaData: Media[];
    //The setter Function for the MediaList state in the BrowseMedia
    onSearch: (mediaList: Media[]) => void;
}

export function SearchBar({ MediaData, onSearch }: SearchProps): JSX.Element {
    //The Text in the SearchBar
    const [searchText, setSearchText] = useState("");
    //Handles all the Search, filtering the MediaData, and setting the MediaList state in
    //the BrowseMedia.tsx using the onSearch function
    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const searchValue = event.target.value;
        setSearchText(searchValue);

        if (searchValue === "") {
            //If nothing, the state is set to All the mediaData
            onSearch(MediaData);
            return;
        } else {
            //Filtering the Data based on the text input in the SearchBar
            const filteredMedia = MediaData.filter(
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
            onSearch([...filteredMedia]);
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
                <IoSearchCircleSharp
                    className={classes.icon}
                    size={15}
                    style={{ fill: "black" }}
                />
            </div>
        </div>
    );
}
