import React from "react";
import classes from "./AddMediaForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserData } from "../../UserData";
import { schema } from "./FormSchema";
import axios from "axios";
import { UserAddForm } from "../../Interfaces";

export const AddUserForm = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<UserAddForm>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: UserAddForm): void => {
        UserData.push({
            username: data.username,
            watched: [],
            role: "Default"
        });
        reset();
    };

    return (
        <div className={classes.form_wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    placeholder="Username..."
                    {...register("username")}
                />
                <p>{errors.username?.message}</p>
                <input type="submit" />
            </form>
        </div>
    );
};
