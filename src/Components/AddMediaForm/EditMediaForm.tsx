import React, { ChangeEvent, useState } from "react";
import classes from "./AddMediaForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateMediaInList } from "../../MediaData";
import { schema } from "./FormSchema";
import axios from "axios";
import { Media, UserSubmitForm } from "../../Interfaces";
/* eslint no-extra-parens: "off" */

export const EditMediaForm = ({ media }: { media: Media }): JSX.Element => {
    const [imageLinkValid, setImageLinkvalid] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        getValues
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: UserSubmitForm): void => {
        if (data.image.endsWith(".jpg")) {
            const createdMedia = {
                title: data.title,
                type: data.type,
                yearReleased: data.yearReleased,
                rating: data.rating,
                image: data.image,
                genres: [],
                _id: media._id
            };
            updateMediaInList(createdMedia);

            reset();
        }
    };

    const checkImage = (url: string) => {
        return axios
            .get(url)
            .then(() => true)
            .catch(() => false);
    };

    const imageLinkChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        let imageValid = await checkImage(e.target.value);
        imageValid = imageValid && e.target.value != "";
        setImageLinkvalid(imageValid);
    };

    let imageHTMLoutput;

    if (imageLinkValid) {
        imageHTMLoutput = <img src={getValues("image")} />;
    } else {
        imageHTMLoutput = (
            <div className={classes.image_goes_here}>
                <img src={media.image} alt={media.title} />
            </div>
        );
    }

    return (
        <div className={classes.form_wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <label htmlFor="title">Media title:</label>
                <input
                    type="text"
                    {...register("title")}
                    defaultValue={media.title}
                />
                <p>{errors.title?.message}</p>

                <label htmlFor="yearReleased">Year Released:</label>
                <input
                    type="number"
                    {...register("yearReleased")}
                    defaultValue={media.yearReleased}
                />
                <p>{errors.yearReleased?.message}</p>

                <label htmlFor="type">Media type:</label>
                <select {...register("type")} defaultValue={media.type}>
                    <option value="Movie">Movie</option>
                    <option value="Show">Show</option>
                </select>
                <p>{errors.type?.message}</p>

                <label htmlFor="rating">Year Released:</label>
                <input
                    type="number"
                    {...register("rating")}
                    defaultValue={media.rating}
                />
                <p>{errors.rating?.message}</p>

                {/**
                <label htmlFor="genres">Genres:</label>
                <select {...register("genres")}>
                    MAP GENRES HERE for a MULIT-SELECT CHECKBOX
                </select>
                <p>{errors.genres?.message}</p>
                */}

                <label htmlFor="image">Media Poster:</label>
                <input
                    id="media-poster-input"
                    type="text"
                    defaultValue={media.image}
                    {...register("image", {
                        onChange: (e) => imageLinkChangeHandler(e)
                    })}
                />
                <p>{errors.image?.message}</p>
                <input type="submit" />
            </form>
            <div className={classes.image_holder}>{imageHTMLoutput}</div>
        </div>
    );
};
