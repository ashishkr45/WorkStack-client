import { useState } from "react";

interface ApiOptions<T> {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: T;
  headers?: HeadersInit;
}

export const useApi = <TRequest = unknown, TResponse = unknown>() => {
  const [data, setData] = useState<TResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = async (options: ApiOptions<TRequest>) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(options.url, {
        method: options.method || "GET",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setData(result);
      return result;

    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, request };
};
