import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
interface FavoriteMediaProps {
    titles: string[];
    handleFavorites: (titles: string[]) => void;
}
export const DeleteMedia = (props: FavoriteMediaProps): JSX.Element => {
    //State to see which Iteam the userWants to delete
    const [deletedMediaTitle, setDeletedMediaTitle] = useState<string>();
    //Now filtering the titles to remove the deletedMediaTitle
    //Now converting the filteredTitles to a List of
    let filteredTitles = props.titles.filter(
        (media) => media !== deletedMediaTitle
    );

    //The color for the TrashCan
    const [trashColor, setTrashColor] = useState<string>("black");

    function handleOnDrop(e: React.DragEvent) {
        const toDelete = e.dataTransfer.getData("newFavorite") as string;
        setDeletedMediaTitle(toDelete);
        filteredTitles = props.titles.filter(
            (media) => media !== deletedMediaTitle
        );

        props.handleFavorites([...filteredTitles]);
        //Set the color of the star back to the original one

        setTrashColor("black");
    }
    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
        //To change the color of the star when the image can be dragged into the favoritesList
        setTrashColor("green");
        // props.handleFavorites([...filteredTitles]);
    }
    return (
        <>
            <div
                className="header-container"
                onDrop={handleOnDrop}
                onDragOver={handleDragOver}
            >
                {" "}
                <div>
                    <h2>Deleted Media List:</h2>
                    <ul>
                        <div>{deletedMediaTitle} state rect</div>
                    </ul>
                </div>
                <h1>
                    <FaTrash style={{ color: trashColor }} />
                </h1>
            </div>
        </>
    );
};
