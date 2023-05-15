import * as yup from "yup";

export const currentYear = new Date().getFullYear();
export const schema = yup.object().shape({
    yearReleased: yup
        .number()
        .positive("Year Released has to be positive")
        .integer("Year Relased has to be a whole number")
        .min(1920, "Year Released has to be greater than or equal to 1920")
        .max(
            currentYear,
            `Year Released has to be less than or equal to ${currentYear}`
        )
        .required("Year Released is required")
        .typeError("Year Released has to be a number"),
    rating: yup
        .number()
        .positive("Rating has to be positive")
        .min(0, "Rating has to be greater than or equal to 0")
        .max(5, "Rating has to be less than or equal to 5")
        .required("Rating is required")
        .typeError("Rating has to be a number"),
    type: yup.string().required(),
    genres: yup.array().min(1, "Genres are required")
});
