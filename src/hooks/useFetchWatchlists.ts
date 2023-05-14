import { useCallback, useEffect, useState } from "react";
import { MediaInterface } from "../interfaces/MediaInterface";
import { nanoid } from "nanoid";

export const useFetchWatchlists = (
    fetchFunction: any,
    userId: string | undefined
) => {
    const [data, setData] = useState({ watched: [], toWatch: [] });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetchFunction(userId);
            const responseData = response.data.data;
            responseData.watched = responseData.watched.map(
                (media: MediaInterface) => ({
                    ...media,
                    image: require(`../imgs/media-covers/${media.image}`),
                    mediaId: nanoid()
                })
            );
            responseData.toWatch = responseData.toWatch.map(
                (media: MediaInterface) => ({
                    ...media,
                    image: require(`../imgs/media-covers/${media.image}`),
                    mediaId: nanoid()
                })
            );

            console.log(responseData);
            setData(responseData);
        } catch (error) {
            console.log(error);
            setError(true);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return [data, loading, error, setData] as const;
};
