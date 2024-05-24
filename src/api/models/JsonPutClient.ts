// src/api/PostClient.ts
import HttpClient from "./HttpClient";

export default class JsonPutClient extends HttpClient {
  async put<T>(url: string, data: unknown): Promise<T> {
    const res = await this.request<T>({ method: "Put", url, data });
    return res.data;
  }
}
