import * as yup from "yup";

export const currentYear = new Date().getFullYear();
export const schema = yup.object().shape({
    rating: yup
        .number()
        .positive("Rating has to be positive")
        .min(0, "Rating has to be greater than or equal to 0")
        .max(5, "Rating has to be less than or equal to 5")
        .required("Rating is required")
        .typeError("Rating has to be a number"),
    genres: yup.array().min(1, "Genres are required")
});
