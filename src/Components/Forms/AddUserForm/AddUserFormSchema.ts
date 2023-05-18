import * as yup from "yup";

export const schema = yup.object().shape({
    username: yup
        .string()
        .required("Username is required")
        .typeError("Username has to be a string")
});
