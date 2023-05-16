import React from "react";
import classes from "../Form.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./EditMediaFromSchema";
import { EditMediaSubmitForm, mediaGenre } from "../../../Interfaces";
import { genreList } from "../AddMediaForm/AddMediaForm";
import { MediaInterface } from "../../../interfaces/MediaInterface";
import { getMediaData } from "../../../api/mediaApi";
import slugify from "react-slugify";
/* eslint no-extra-parens: "off" */

export const EditMediaForm = ({
    media
}: {
    media: MediaInterface;
}): JSX.Element => {
    const checkedMedia = genreList.filter((genre: mediaGenre) =>
        media.genres.includes(genre)
    );
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<EditMediaSubmitForm>({
        resolver: yupResolver(schema),
        defaultValues: { genres: checkedMedia }
    });
    const onSubmit = async (data: EditMediaSubmitForm) => {
        try {
            // const slugifiedTitle = slugify(media.title);
            // console.log(slugifiedTitle);
            // let mediaImage = media.image;
            // mediaImage = mediaImage.replace(/\..*\./g, ".");
            // mediaImage = mediaImage.replace(/\..*\./g, ".");
            // console.log(mediaImage);
            // const recievedMedia = await getMediaData(
            //     `?search=${slugifiedTitle}`
            // );
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={classes.form_wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <label htmlFor="title">Media title: {media.title}</label>

                <label htmlFor="yearReleased">Year Released:</label>
                <input
                    type="number"
                    {...register("yearReleased", { valueAsNumber: true })}
                    defaultValue={media.yearReleased}
                />
                <p>{errors.yearReleased?.message}</p>

                <label htmlFor="type">Media type:</label>
                <select {...register("type")} defaultValue={media.type}>
                    <option value="Movie">Movie</option>
                    <option value="Show">Show</option>
                </select>
                <p>{errors.type?.message}</p>

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
                    defaultValue={media.rating}
                />
                <p>{errors.rating?.message}</p>

                <input type="submit" />
            </form>
            <img className={classes.image_holder} src={media.image} />
        </div>
    );
};
