import { useCallback, useEffect, useState } from "react";
import { MediaInterface } from "../interfaces/MediaInterface";
import { addImageToMedia, addMediaId } from "../utils/media-config";

export const useFetchWatchlists = (
    fetchFunction: any,
    userId: string | undefined
) => {
    const [watched, setWatched] = useState<MediaInterface[]>([]);
    const [toWatch, setToWatch] = useState<MediaInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetchFunction(userId);
            const responseData = response.data.data;
            responseData.watched = addImageToMedia(responseData.watched);
            responseData.watched = addMediaId(responseData.watched);
            responseData.toWatch = addImageToMedia(responseData.toWatch);
            responseData.toWatch = addMediaId(responseData.toWatch);

            setWatched(responseData.watched);
            setToWatch(responseData.toWatch);
        } catch (error) {
            console.log(error);
            setError(true);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return [watched, toWatch, loading, error, setWatched, setToWatch] as const;
};
