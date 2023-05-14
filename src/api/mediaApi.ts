import { ENDPOINTS } from "../constants/endpoints";
import { api } from "../utils/api";

const { MEDIA } = ENDPOINTS;

export const getMediaData = async (searchQuery: string) => {
    return api.get(`${MEDIA}${searchQuery}`);
};

// export const getUserWatchlist = async();
