import { useCallback, useEffect, useState } from "react";

export const useFetchItem = (fetchFunction: any) => {
    const [item, setItem] = useState();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetchFunction();
            setItem(response.data.data);
        } catch (error) {
            console.log(error);
            setError(true);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return [item, loading, error] as const;
};
