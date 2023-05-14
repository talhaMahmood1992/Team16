import { ENDPOINTS } from "../constants/endpoints";
import { api } from "../utils/api";

const DEFAULT_USER_ID = "645fd04509b4ba6a7a37acc1";
const { USERS, WATCHLISTS } = ENDPOINTS;

export const getUsersList = async () => {
    const endpoint = USERS;
    return api.get(endpoint);
};

export const getUser = async (userId: string) => {
    const endpoint = `${USERS}/${userId}`;
    return api.get(endpoint);
};

export const getDefaultUser = async () => await getUser(DEFAULT_USER_ID);

export const getUserWatchlists = async (userId: string) => {
    const endpoint = `${USERS}/${userId}/${WATCHLISTS}`;
    return api.get(endpoint);
};

export const updateUser = async (
    userId: string | undefined,
    watchlists: any
) => {
    const endpoint = `${USERS}/${userId}`;
    return api.patch(endpoint, watchlists);
};
