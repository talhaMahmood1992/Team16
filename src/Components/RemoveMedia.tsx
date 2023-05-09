import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
interface FavoriteMediaProps {
    titles: string[];
    handleFavorites: (titles: string[]) => void;
}
export const DeleteMedia = (props: FavoriteMediaProps): JSX.Element => {
    //State to see which Iteam the userWants to delete
    const [deletedMediaTitle, setDeletedMediaTitle] = useState<string>();

    //The color for the TrashCan
    const [trashColor, setTrashColor] = useState<string>("black");

    function handleOnDrop(e: React.DragEvent) {
        const toDelete = e.dataTransfer.getData("newMedia") as string;
        setDeletedMediaTitle(toDelete);
        const filteredTitles = props.titles.filter(
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
        <div
            className="header-container"
            onDrop={handleOnDrop}
            onDragOver={handleDragOver}
        >
            <div>
                <ul>
                    <div>{deletedMediaTitle}</div>
                </ul>
            </div>
            <h1>
                <FaTrash style={{ color: trashColor }} />
            </h1>
        </div>
    );
};
