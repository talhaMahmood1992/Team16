import React from "react";
import classes from "../Form.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./AddMediaFormSchema";
import { UserSubmitForm, mediaGenre } from "../../../Interfaces";
import { addMedia } from "../../../api/mediaApi";

export const genreList: mediaGenre[] = [
    "Action",
    "Adventure",
    "Animated",
    "Comedy",
    "Crime",
    "Drama",
    "Fantasy",
    "History",
    "Horror",
    "Kids",
    "Mystery",
    "Reality",
    "Romance",
    "Science Fiction",
    "Sports",
    "Superhero",
    "Thriller",
    "Western"
];

export const AddMediaForm = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: UserSubmitForm) => {
        try {
            const updatedData = {
                ...data,
                image: "default-media-img.jpg"
            };
            await addMedia(updatedData);
            reset();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={classes.form_wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <label htmlFor="title">Media title:</label>
                <input
                    type="text"
                    placeholder="Media title..."
                    {...register("title")}
                    data-testid="Media-title"
                />
                <p>{errors.title?.message}</p>

                <label htmlFor="yearReleased">Year Released:</label>
                <input
                    type="number"
                    placeholder="Year Released..."
                    {...register("yearReleased")}
                    data-testid="year-released-input"
                />
                <p>{errors.yearReleased?.message}</p>

                <label htmlFor="type">Media type:</label>
                <select {...register("type")} data-testid="media-type-select">
                    <option value="Movie">Movie</option>
                    <option value="Show">Show</option>
                </select>
                <p>{errors.type?.message}</p>

                <label>Genres:</label>
                <div className={classes.genres} data-testid="media-genre">
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
                                    data-testid={`genre-checkbox-${genre}`}
                                />
                                <label>{genre}</label>
                            </div>
                        );
                    })}
                </div>
                <p>{errors.genres?.message}</p>

                <label data-testid="Rating" htmlFor="rating">
                    Rating:
                </label>
                <input
                    type="number"
                    placeholder="Rating..."
                    {...register("rating")}
                    data-testid="rating-input"
                />
                <p>{errors.rating?.message}</p>
                <input type="submit" />
            </form>
            <img
                className={classes.image_holder}
                src={require("../../../imgs/media-covers/default-media-img.jpg")}
                alt="Media cover"
            />
        </div>
    );
};
