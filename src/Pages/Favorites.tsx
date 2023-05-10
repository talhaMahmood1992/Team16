/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Media, UserInterface } from "../Interfaces";
import { getUserByUsername } from "../UserData";
import { DeleteMedia } from "../Components/RemoveMedia";
// import { NavLink } from "react-router-dom";
interface FavoriteMediaProps {
    userName: string;
}
export const FavoritesPage = (props: FavoriteMediaProps): JSX.Element => {
    const currentUser = getUserByUsername(props.userName);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [userMedia, setUserMedia] = useState<Media[]>(
        getWatchedList(currentUser)
    );

    function getWatchedList(user: UserInterface): Media[] {
        const watchedList: Media[] = user.watched.map((item) => item.media);
        return watchedList;
    }

    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [deleteMedia, setDleteMedia] = useState<string>("");

    // const [trashColor, setTrashColor] = useState<string>("black");

    // function FindMedia(searchTerm: string) {
    //     const filteredData = mediaData.filter(
    //         (media) => media.title.toLowerCase() === searchTerm.toLowerCase()
    //     );
    //     return filteredData[0];
    // }

    // function handleOnDrop(e: React.DragEvent) {
    //     const toDelete = e.dataTransfer.getData("newMedia") as string;
    //     //Set the color of the star back to the original one
    //     setDleteMedia(toDelete);

    //     updateDeletedWatchedMedia(currentUser.username, {
    //         ...FindMedia(toDelete)
    //     });

    //     setTrashColor("black");
    // }
    // function handleDragOver(e: React.DragEvent) {
    //     e.preventDefault();
    //     //To change the color of the star when the image can be dragged into the favoritesList
    //     setTrashColor("green");
    // }

    // const MediaToButton = (
    //     mediaItem: Media
    //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // ): JSX.Element => {
    //     return (
    //         <div key={mediaItem._id} className="media-item">
    //             <img src={mediaItem.image} alt={mediaItem.title} />
    //             <div className="media-details">
    //                 <p className="media-year" data-testid="mediaYear">
    //                     {mediaItem.yearReleased}
    //                 </p>
    //                 <div className="media-rating">
    //                     {<SpecialRating></SpecialRating>}
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // };

    // const mediaList = userMedia.map((Media) => {
    //     return {
    //         ...Media
    //     };
    // });
    return (
        <>
            <section className="page">
                <h2 className="heading-secondary">My Favorites</h2>
                <p>You will need to click on the page to see the changes</p>
            </section>
            <DeleteMedia userName={props.userName}></DeleteMedia>
        </>
    );
};
