import * as yup from "yup";

export const schema = yup.object().shape({
    genres: yup.array().min(1, "Genres are required")
});
