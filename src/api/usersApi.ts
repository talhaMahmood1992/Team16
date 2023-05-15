import { ENDPOINTS } from "../constants/endpoints";
import { UserInterface } from "../interfaces/UserInterface";
import { api } from "../utils/api";

const { USERS, WATCHLISTS } = ENDPOINTS;

export const getUsersList = async () => {
    const endpoint = USERS;
    return api.get(endpoint);
};

export const getUser = async (userId: string) => {
    const endpoint = `${USERS}/${userId}`;
    return api.get(endpoint);
};

export const getInitialUser = async (userId: string) => await getUser(userId);

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

export const addUser = async (user: UserInterface) => {
    const endpoint = USERS;
    return api.post(endpoint, user);
};
