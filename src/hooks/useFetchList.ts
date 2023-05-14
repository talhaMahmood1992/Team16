import { useCallback, useEffect, useState } from "react";
import { MediaInterface } from "../interfaces/MediaInterface";

export const useFetchList = (
    fetchFunction: any,
    listType: string,
    searchQuery?: string
) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetchFunction(searchQuery);
            let responseData = response.data.data;
            if (listType === "media") {
                responseData = responseData.map((media: MediaInterface) => ({
                    ...media,
                    image: require(`../imgs/media-covers/${media.image}`)
                }));
            }
            setData(responseData);
        } catch (error) {
            console.log(error);
            setError(true);
        }
        setLoading(false);
    }, [searchQuery]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return [data, loading, error, setData] as const;
};
