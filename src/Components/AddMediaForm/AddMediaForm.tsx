import React, { ChangeEvent, useState } from "react";
import classes from "./AddMediaForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mediaData } from "../../MediaData";
import { nanoid } from "nanoid";
import { schema } from "./FormSchema";
import { AiFillPlusCircle } from "react-icons/ai";
import axios from "axios";
import { UserSubmitForm } from "../../Interfaces";
/* eslint no-extra-parens: "off" */

export const AddMediaForm = (): JSX.Element => {
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
            mediaData.push({
                title: data.title,
                type: data.type,
                yearReleased: data.yearReleased,
                rating: data.rating,
                image: data.image,
                genres: [],
                movieId: nanoid()
            });
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
                <AiFillPlusCircle
                    onClick={() =>
                        document.getElementById("media-poster-input")?.focus()
                    }
                />
                <p>Add Image</p>
            </div>
        );
    }

    return (
        <div className={classes.form_wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <label htmlFor="title">Media title:</label>
                <input
                    type="text"
                    placeholder="Media title..."
                    {...register("title")}
                />
                <p>{errors.title?.message}</p>

                <label htmlFor="yearReleased">Year Released:</label>
                <input
                    type="number"
                    placeholder="Year Released..."
                    {...register("yearReleased")}
                />
                <p>{errors.yearReleased?.message}</p>

                <label htmlFor="type">Media type:</label>
                <select {...register("type")}>
                    <option value="Movie">Movie</option>
                    <option value="Show">Show</option>
                </select>
                <p>{errors.type?.message}</p>

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
                    placeholder="Media poster link address..."
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
