import axios from "axios";
import { axiosConfig } from "./api-config";

export const api = axios.create({
    ...axiosConfig
});
