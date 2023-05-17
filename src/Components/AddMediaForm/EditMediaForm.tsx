import React, { useState } from "react";
import classes from "./AddMediaForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateMediaInList, removeMediaInList } from "../../MediaData";
import { schema } from "./FormSchema";
import { Media, Role, mediaType } from "../../Interfaces";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { UserData } from "../../UserData";
/* eslint no-extra-parens: "off" */

interface EditMediaFormProps {
    role: Role;
    media: Media;
    mediaSetter: React.Dispatch<React.SetStateAction<Media[]>>;
    superSetter: React.Dispatch<React.SetStateAction<string[]>>;
    superList: string[];
}
export const EditMediaForm = (props: EditMediaFormProps): JSX.Element => {
    const [genreList, setGenreList] = useState<string[]>(props.media.genres);
    function updateGenreList(event: React.ChangeEvent<HTMLInputElement>) {
        const genre = event.target.value;
        // Check if the emotion is already present
        if (genreList.includes(genre)) {
            // Remove the given value
            setGenreList(genreList.filter((e) => e !== genre));
        } else {
            // Append the given value
            setGenreList([...genreList, genre]);
        }
    }
    const GENRES = [
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

    type EditSubmitForm = {
        yearReleased: number;
        rating: number;
        type: mediaType;
        //genres: string[];
        image: string;
    };

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<EditSubmitForm>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: EditSubmitForm): void => {
        const createdMedia = {
            title: props.media.title,
            type: data.type,
            yearReleased: data.yearReleased,
            rating: data.rating,
            image: props.media.image,
            genres: genreList,
            _id: props.media._id
        };
        props.mediaSetter(updateMediaInList(createdMedia));
        navigate("/editMedia");
    };

    //Runs when you hit the big red scary button
    const onRemoval = (): void => {
        props.mediaSetter(removeMediaInList(props.media));

        const removeTitle = () => {
            const editableList = [...props.superList];
            const editIndex = editableList.findIndex(
                (title) => title === props.media.title
            );
            if (editIndex >= 0) {
                editableList.splice(editIndex, 1);
            }
            UserData.forEach(function (user) {
                let favIndex = user.watched.findIndex(
                    (userMedia) => userMedia.media.title === props.media.title
                );
                while (favIndex >= 0) {
                    user.watched.splice(favIndex, 1);
                    favIndex = user.watched.findIndex(
                        (userMedia) =>
                            userMedia.media.title === props.media.title
                    );
                }
            });
            return editableList;
        };

        props.superSetter(removeTitle());
        navigate("/editMedia");
    };

    return (
        <div className={classes.form_wrapper}>
            <div className={classes.form}>
                {props.role == "Super" ? (
                    <Button variant="outline-danger" onClick={onRemoval}>
                        <h2>Remove This Media</h2>
                    </Button>
                ) : (
                    <></>
                )}
                <br />
                <Form.Group onSubmit={handleSubmit(onSubmit)}>
                    <form className={classes.form_group}>
                        <label htmlFor="yearReleased">Year Released:</label>
                        <input
                            type="number"
                            {...register("yearReleased")}
                            defaultValue={props.media.yearReleased}
                        />
                        <p>{errors.yearReleased?.message}</p>
                        <br />

                        <label htmlFor="type">Media type:</label>
                        <select
                            {...register("type")}
                            defaultValue={props.media.type}
                        >
                            <option value="Movie">Movie</option>
                            <option value="Show">Show</option>
                        </select>
                        <p>{errors.type?.message}</p>
                        <br />

                        <label htmlFor="rating">Rating:</label>
                        <input
                            type="number"
                            {...register("rating")}
                            defaultValue={props.media.rating}
                        />
                        <p>{errors.rating?.message}</p>
                        <br />

                        <label htmlFor="genres">Genres:</label>
                        <div className={classes.checkbox}>
                            {GENRES.map((genre: string) => (
                                <Form.Check
                                    //{...register("genres")}
                                    type="checkbox"
                                    defaultValue={genreList}
                                    key={genre}
                                    id={genre}
                                    value={genre}
                                    label={genre}
                                    name={genre}
                                    checked={genreList.includes(genre)}
                                    onChange={updateGenreList}
                                />
                            ))}
                        </div>
                        <br />
                        <input type="submit" />
                    </form>
                </Form.Group>
            </div>
            <div className={classes.image_holder}>
                <img src={props.media.image} />
            </div>
        </div>
    );
};
