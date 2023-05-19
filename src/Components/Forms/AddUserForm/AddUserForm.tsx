import React, { useState } from "react";
import classes from "../Form.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./AddUserFormSchema";
import { UserAddForm } from "../../../Interfaces";
import { addUser } from "../../../api/usersApi";
import { LoadingSpinner } from "../../../UI/LoadingSpinner";
import { ErrorDisplay } from "../../../UI/ErrorDisplay";
import { SuccessfulDisplay } from "../../../UI/SuccessfulDisplay";
/* eslint no-extra-parens: "off" */

export const AddUserForm = (): JSX.Element => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<UserAddForm>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: UserAddForm) => {
        setIsSubmitted(true);
        setError(false);
        setLoading(true);
        try {
            await addUser({
                ...data,
                watched: [],
                toWatch: [],
                role: "Default"
            });
            reset();
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    return (
        <div className={classes.form_page}>
            <div className={classes.form_wrapper}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={classes.form}
                >
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Username..."
                        {...register("username")}
                    />
                    <p>{errors.username?.message}</p>

                    <input type="submit" />
                </form>
            </div>
            {loading && !error && (
                <LoadingSpinner message="Adding user..." color="yellow" />
            )}
            {!loading && error && (
                <ErrorDisplay message="No duplicate Usernames" color="yellow" />
            )}
            {!loading && !error && isSubmitted && (
                <SuccessfulDisplay message="Added User" color="yellow" />
            )}
        </div>
    );
};
