import axios, { AxiosResponse, Method } from "axios";
import useSWR, { mutate } from "swr";

type Data = { [key: string]: unknown };
type FetcherFunc = (url: string, data?: Data) => Promise<Data>;

const createFetcher =
  (method: Method): FetcherFunc =>
  (url, data) =>
    axios({ method, url, data }).then((res: AxiosResponse) => res.data);

const fetchers = {
  get: createFetcher("GET"),
  post: createFetcher("POST"),
  put: createFetcher("PUT"),
  delete: createFetcher("DELETE"),
};

type SwrProps = {
  url: string;
  type: keyof typeof fetchers;
};

export const useCustomSWR = ({ url = "/api/data", type = "get" }: SwrProps) => {
  const { data, error, isValidating } = useSWR(url, fetchers[type]);

  const fetchAndMutate = async (
    type: keyof typeof fetchers,
    url: string,
    data?: Data
  ) => {
    const response = await fetchers[type](url, data);
    mutate(url);
    return response;
  };

  return {
    data,
    error,
    isValidating,
    get: (url: string) => fetchAndMutate("get", url),
    post: (url: string, data: Data) => fetchAndMutate("post", url, data),
    put: (url: string, data: Data) => fetchAndMutate("put", url, data),
    delete: (url: string) => fetchAndMutate("delete", url),
  };
};
