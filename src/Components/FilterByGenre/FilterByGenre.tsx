import React from "react";
import { genreList } from "../Forms/AddMediaForm/AddMediaForm";
import { mediaGenre } from "../../Interfaces";
import classes from "./FilterByGenre.module.css";
import { useForm } from "react-hook-form";
import { MediaInterface } from "../../interfaces/MediaInterface";

interface FilterByGenreForm {
    genres: mediaGenre[];
}

interface FilterByGenreProps {
    watched: MediaInterface[];
    toWatch: MediaInterface[];
    setFilteredWatched: (mediaList: MediaInterface[]) => void;
    setFilteredToWatch: (mediaList: MediaInterface[]) => void;
}

export const FilterByGenre = ({
    watched,
    toWatch,
    setFilteredWatched,
    setFilteredToWatch
}: FilterByGenreProps): JSX.Element => {
    const { register, handleSubmit } = useForm<FilterByGenreForm>();

    const checkSubset = (
        parentArray: mediaGenre[],
        subsetArray: mediaGenre[]
    ) => {
        return subsetArray.every((el) => {
            return parentArray.includes(el);
        });
    };

    const onSubmit = (data: FilterByGenreForm) => {
        const updatedFilterWatched = watched.filter((media: MediaInterface) =>
            checkSubset(media.genres, data.genres)
        );
        const updatedFilterToWatch = toWatch.filter((media: MediaInterface) =>
            checkSubset(media.genres, data.genres)
        );

        setFilteredWatched(updatedFilterWatched);
        setFilteredToWatch(updatedFilterToWatch);
    };

    return (
        <form className={classes.filter} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.checkbox_group}>
                {genreList.map((genre: mediaGenre) => {
                    return (
                        <div key={genre} className={classes.checkbox}>
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
            <button className={classes.filter_button} type="submit">
                Filter
            </button>
        </form>
    );
};
