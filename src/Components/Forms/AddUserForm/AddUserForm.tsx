import React from "react";
import classes from "../Form.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./AddUserFormSchema";
import { UserAddForm } from "../../../Interfaces";
import { addUser } from "../../../api/usersApi";

export const AddUserForm = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<UserAddForm>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: UserAddForm) => {
        try {
            await addUser({
                ...data,
                watched: [],
                toWatch: [],
                role: "Default"
            });
            reset();
        } catch (error) {
            console.log(error);
        }
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
