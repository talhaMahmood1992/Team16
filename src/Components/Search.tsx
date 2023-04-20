/* eslint-disable indent */
import React, { useState } from "react";
import { Media } from "../Interfaces";
import { mediaData } from "../MediaData";
import ListUI from "../Pages/ListUI";
//import classes from "../index";
//import classes from "../UI/SearchBar.module.css";
export function SearchBar(): JSX.Element {
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function setListHelper(text: string) {
        text === ""
            ? setList(mediaData)
            : setList(
                  mediaData.filter(
                      (x: Media): boolean =>
                          x.title.includes(text) ||
                          x.type.includes(text) ||
                          x.yearReleased.toString().includes(text)
                  )
              );
    }
    const [, setName] = useState<string>("");
    const [list, setList] = useState<Media[]>(mediaData);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateName(event as React.ChangeEvent<HTMLInputElement>);
        setListHelper(event.target.value);
    };
    return (
        <div>
            {" "}
            <h1 style={{ textAlign: "center" }} className="heading-primary">
                Browse Media
            </h1>
            <div style={styles.container}>
                <input
                    type="text"
                    placeholder="Search Media"
                    style={styles.input}
                    onChange={handleInputChange}
                />
                <button style={styles.button}>
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
            <div>
                <ListUI MediaData={list}></ListUI>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "24px",
        boxShadow: "0 1px 6px rgba(32, 33, 36, 0.28)",
        padding: "8px",
        width: "300px",
        margin: "0 auto"
    },
    input: {
        flex: 1,
        border: "none",
        outline: "none",
        fontSize: "16px",
        fontWeight: "500",
        padding: "8px"
    },
    button: {
        border: "none",
        outline: "none",
        backgroundColor: "#fecb00",
        borderRadius: "24px",
        padding: "8px",
        marginLeft: "8px",
        cursor: "pointer"
    },
    logo: {
        backgroundColor: "white" // Set the background color for the logo
    }
};
