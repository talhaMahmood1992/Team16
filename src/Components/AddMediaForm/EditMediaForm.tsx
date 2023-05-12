import React, { ChangeEvent, useState } from "react";
import classes from "./AddMediaForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateMediaInList } from "../../MediaData";
import { schema } from "./FormSchema";
import axios from "axios";
import { Media, UserSubmitForm } from "../../Interfaces";
import { useNavigate } from "react-router-dom";
/* eslint no-extra-parens: "off" */
interface EditMediaFormProps {
    media: Media;
    mediaSetter: React.Dispatch<React.SetStateAction<Media[]>>;
}
export const EditMediaForm = (props: EditMediaFormProps): JSX.Element => {
    const [imageLinkValid, setImageLinkvalid] = useState<boolean>(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: UserSubmitForm): void => {
        if (data.image.endsWith(".jpg")) {
            const createdMedia = {
                title: props.media.title,
                type: data.type,
                yearReleased: data.yearReleased,
                rating: data.rating,
                image: data.image,
                genres: [],
                _id: props.media._id
            };
            props.mediaSetter(updateMediaInList(createdMedia));
            navigate("/editMedia");
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
                <img src={props.media.image} alt={props.media.title} />
            </div>
        );
    }

    return (
        <div className={classes.form_wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <label htmlFor="yearReleased">Year Released:</label>
                <input
                    type="number"
                    {...register("yearReleased")}
                    defaultValue={props.media.yearReleased}
                />
                <p>{errors.yearReleased?.message}</p>

                <label htmlFor="type">Media type:</label>
                <select {...register("type")} defaultValue={props.media.type}>
                    <option value="Movie">Movie</option>
                    <option value="Show">Show</option>
                </select>
                <p>{errors.type?.message}</p>

                <label htmlFor="rating">Rating:</label>
                <input
                    type="number"
                    {...register("rating")}
                    defaultValue={props.media.rating}
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
                    defaultValue={props.media.image}
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
