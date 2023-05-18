import React from "react";
import classes from "../Form.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./UserEditMediaSchema";
import { EditMediaSubmitForm, mediaGenre } from "../../../Interfaces";
import { genreList } from "../AddMediaForm/AddMediaForm";
import { MediaInterface } from "../../../interfaces/MediaInterface";
import { getMediaData, updateMedia } from "../../../api/mediaApi";
import slugify from "react-slugify";
import { useLocation } from "react-router-dom";
import { updateUser } from "../../../api/usersApi";
import {
    removeImageFromMedia,
    removeMediaId
} from "../../../utils/media-config";
/* eslint no-extra-parens: "off" */

export const UserEditMediaForm = ({
    media
}: {
    media: MediaInterface;
}): JSX.Element => {
    const location = useLocation();
    const mediaItem = location.state.mediaItem;
    const watched = location.state.watched;
    const toWatch = location.state.toWatch;
    const userId = location.state.userId;
    const checkedMedia = genreList.filter((genre: mediaGenre) =>
        mediaItem.genres.includes(genre)
    );
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<EditMediaSubmitForm>({
        resolver: yupResolver(schema),
        defaultValues: { genres: checkedMedia }
    });

    const saveAPICall = async (
        updatedWatched: MediaInterface[],
        updatedToWatch: MediaInterface[]
    ) => {
        try {
            await updateUser(userId, {
                watched: updatedWatched,
                toWatch: updatedToWatch
            });
            console.log("updated default user lists");
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = (data: EditMediaSubmitForm) => {
        const searchInWatched = watched.find(
            (media: MediaInterface) => media.mediaId === mediaItem.mediaId
        );
        const searchInToWatch = toWatch.find(
            (media: MediaInterface) => media.mediaId === mediaItem.mediaId
        );

        let updatedWatched = [...watched];
        let updatedToWatch = [...toWatch];

        const updatedMedia = {
            ...data,
            title: mediaItem.title,
            image: mediaItem.image,
            yearReleased: mediaItem.yearReleased,
            type: mediaItem.type,
            _id: mediaItem._id
        };

        if (searchInWatched) {
            updatedWatched = updatedWatched.filter(
                (media: MediaInterface) => media.mediaId !== mediaItem.mediaId
            );
            updatedWatched = [...updatedWatched, updatedMedia];
        } else if (searchInToWatch) {
            updatedToWatch = updatedToWatch.filter(
                (media: MediaInterface) => media.mediaId !== mediaItem.mediaId
            );
            updatedToWatch = [...updatedToWatch, updatedMedia];
        } else {
            throw new Error("Could not find in list");
        }

        updatedWatched = removeMediaId(updatedWatched);
        updatedWatched = removeImageFromMedia(updatedWatched);

        updatedToWatch = removeMediaId(updatedToWatch);
        updatedToWatch = removeImageFromMedia(updatedToWatch);

        saveAPICall(updatedWatched, updatedToWatch);
    };

    return (
        <div className={classes.form_wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <label htmlFor="title">Media title: {mediaItem.title}</label>

                <div className={classes.genres}>
                    {genreList.map((genre: mediaGenre) => {
                        return (
                            <div
                                key={genre}
                                className={classes.genre_checkbox_group}
                            >
                                <input
                                    type="checkbox"
                                    {...register("genres")}
                                    value={genre}
                                />
                                <label>{genre}</label>
                            </div>
                        );
                    })}
                </div>
                <p>{errors.genres?.message}</p>

                <label htmlFor="rating">Rating:</label>
                <input
                    type="number"
                    {...register("rating", { valueAsNumber: true })}
                    defaultValue={mediaItem.rating}
                />
                <p>{errors.rating?.message}</p>

                <input type="submit" />
            </form>
            <img className={classes.image_holder} src={mediaItem.image} />
        </div>
    );
};
