import React, { ChangeEvent, useState } from "react";
import classes from "./AddMediaForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateMediaInList, removeMediaInList } from "../../MediaData";
import { schema } from "./FormSchema";
import axios from "axios";
import { Media, mediaType } from "../../Interfaces";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
/* eslint no-extra-parens: "off" */

interface EditMediaFormProps {
    media: Media;
    mediaSetter: React.Dispatch<React.SetStateAction<Media[]>>;
    superSetter: React.Dispatch<React.SetStateAction<string[]>>;
}
export const EditMediaForm = (props: EditMediaFormProps): JSX.Element => {
    const [imageLinkValid, setImageLinkvalid] = useState<boolean>(false);
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
        formState: { errors },
        getValues
    } = useForm<EditSubmitForm>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: EditSubmitForm): void => {
        if (data.image.endsWith(".jpg")) {
            const createdMedia = {
                title: props.media.title,
                type: data.type,
                yearReleased: data.yearReleased,
                rating: data.rating,
                image: data.image,
                genres: genreList,
                _id: props.media._id
            };
            props.mediaSetter(updateMediaInList(createdMedia));
            navigate("/editMedia");
        }
    };

    //Runs when you hit the big red scary button
    const onRemoval = (): void => {
        console.log("He Pressed the Button!");
        props.mediaSetter(removeMediaInList(props.media));
        props.superSetter([]);
        navigate("/");
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
            <div className={classes.form}>
                <Button variant="outline-danger" onClick={onRemoval}>
                    <h2>Remove This Media</h2>
                </Button>
                <br />
                <Form.Group onSubmit={handleSubmit(onSubmit)}>
                    <form>
                        <label htmlFor="yearReleased">Year Released:</label>
                        <input
                            type="number"
                            {...register("yearReleased")}
                            defaultValue={props.media.yearReleased}
                        />
                        <p>{errors.yearReleased?.message}</p>

                        <label htmlFor="type">Media type:</label>
                        <select
                            {...register("type")}
                            defaultValue={props.media.type}
                        >
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

                        <label htmlFor="genres">Genres:</label>

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
                </Form.Group>
            </div>
            <div className={classes.image_holder}>{imageHTMLoutput}</div>
        </div>
    );
};
