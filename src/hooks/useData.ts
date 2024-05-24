/* eslint-disable @typescript-eslint/no-explicit-any */
// src/hooks/useData.ts
import useSWR, { SWRResponse, SWRConfiguration } from "swr";
import GetClient from "../api/models/GetClient";
import JsonPostClient from "../api/models/JsonPostClient";
import FormPostClient from "../api/models/FormPostClient";
import JsonPutClient from "../api/models/JsonPutClient";
import FormPutClient from "../api/models/FormPutClient";
import DeleteClient from "../api/models/DeleteClients";

export const MultiFormData = "multipart/form-data";
export const ApplicationJson = "application/json";
export const withHandleControl = {
  revalidateOnMount: false,
  revalidateOnFocus: false,
};

const BASE_URL = "https://fakestoreapi.com";

const getClient = new GetClient(BASE_URL);
const jsonPostClient = new JsonPostClient(BASE_URL);
const formPostClient = new FormPostClient(BASE_URL);
const jsonPutClient = new JsonPutClient(BASE_URL);
const formPutClient = new FormPutClient(BASE_URL);
const deleteClient = new DeleteClient(BASE_URL);

const fetcher = async ([url, method, data, contentType]: [
  string,
  string,
  any?,
  string?
]) => {
  switch (method) {
    case "GET":
      return getClient.get<any>(url, data);
    case "POST":
      if (contentType === MultiFormData) {
        return formPostClient.post<any>(url, data);
      } else {
        return jsonPostClient.post<any>(url, data);
      }
    case "PUT":
      if (contentType === MultiFormData) {
        return formPutClient.put<any>(url, data);
      } else {
        return jsonPutClient.put<any>(url, data);
      }
    case "DELETE":
      return deleteClient.delete<any>(url);
    default:
      throw new Error("Unsupported method");
  }
};

export const useData = <T>(
  url: string,
  method: string = "GET",
  data?: any,
  contentType: string = ApplicationJson,
  config?: SWRConfiguration<T, any>
): SWRResponse<T, any> => {
  return useSWR<T>([url, method, data, contentType], fetcher, config);
};
