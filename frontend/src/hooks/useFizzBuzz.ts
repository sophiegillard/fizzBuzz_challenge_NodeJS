import { useState, useCallback } from "react";
import { fetchFizzBuzz, type FizzBuzzResponse, type ApiError } from "../api";

export type UseFizzBuzzState = {
    data: FizzBuzzResponse | null;
    loading: boolean;
    error: ApiError | null;
};

export function useFizzBuzz() {
    const [state, setState] = useState<UseFizzBuzzState>({
        data: null,
        loading: false,
        error: null,
    });

    const fetch = useCallback(async (limit?: number) => {
        setState({ data: null, loading: true, error: null });
        try {
            const data = await fetchFizzBuzz(limit);
            setState({ data, loading: false, error: null });
        } catch (err) {
            setState({
                data: null,
                loading: false,
                error: err as ApiError,
            });
        }
    }, []);

    const reset = useCallback(() => {
        setState({ data: null, loading: false, error: null });
    }, []);

    return { ...state, fetch, reset };
}
