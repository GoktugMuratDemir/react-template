import axios, { AxiosInstance, AxiosResponse, Method } from "axios";
import useSWR, { mutate } from "swr";

type Data = { [key: string]: unknown };
type Params = { [key: string]: unknown };
type FetcherFunc = (url: string, data?: Data, params?: Params) => Promise<Data>;

const instance: AxiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// instance.defaults.headers.common['Authorization'] = `Bearer ${yourToken}`;

const createFetcher =
  (method: Method): FetcherFunc =>
  (url, data, params) =>
    instance({ method, url, data, params }).then(
      (res: AxiosResponse) => res.data
    );
const fetchers = {
  get: createFetcher("GET"),
  post: createFetcher("POST"),
  put: createFetcher("PUT"),
  delete: createFetcher("DELETE"),
};

type SwrProps = {
  url: string;
  type: keyof typeof fetchers;
  params?: Params;
};

export const useCustomSWR = ({
  url = "/api/data",
  type = "get",
  params,
}: SwrProps) => {
  const { data, error, isValidating } = useSWR(url, () =>
    fetchers[type](url, undefined, params)
  );

  const fetchAndMutate = async (
    type: keyof typeof fetchers,
    url: string,
    data?: Data,
    params?: Params
  ) => {
    const response = await fetchers[type](url, data, params);
    mutate(url);
    return response;
  };

  return {
    data,
    error,
    isValidating,
    get: (url: string, params: Params) =>
      fetchAndMutate("get", url, undefined, params),
    post: (url: string, data: Data, params: Params) =>
      fetchAndMutate("post", url, data, params),
    put: (url: string, data: Data, params: Params) =>
      fetchAndMutate("put", url, data, params),
    delete: (url: string, params: Params) =>
      fetchAndMutate("delete", url, undefined, params),
  };
};
