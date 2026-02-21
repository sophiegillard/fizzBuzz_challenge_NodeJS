import { getApiUrl } from "./config";

export type FizzBuzzItem = number | "Fizz" | "Buzz" | "FizzBuzz";
export type FizzBuzzResponse = FizzBuzzItem[] | { message: string };

export interface FetchFizzBuzzParams {
    apiKey: string;
    limit?: number;
}

export interface ApiError {
    status: number;
    message: string;
    error?: string;
}

async function handleResponse<T>(res: Response): Promise<T> {
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
        throw {
            status: res.status,
            message: data.error || res.statusText || "Erreur inconnue",
            error: data.error,
        } as ApiError;
    }
    return data as T;
}

export async function fetchFizzBuzz({
    apiKey,
    limit,
}: FetchFizzBuzzParams): Promise<FizzBuzzResponse> {
    const urlPath = getApiUrl("/api/fizzbuzz");
    const url = urlPath.startsWith("http")
        ? new URL(urlPath)
        : new URL(urlPath, window.location.origin);
    if (limit !== undefined && limit > 0) {
        url.searchParams.set("limit", String(limit));
    }

    const res = await fetch(url.toString(), {
        method: "GET",
        headers: {
            api_key: apiKey,
        },
    });
    return handleResponse<FizzBuzzResponse>(res);
}
