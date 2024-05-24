// src/api/PostClient.ts
import HttpClient from "./HttpClient";

export default class JsonPostClient extends HttpClient {
  async post<T>(url: string, data: unknown): Promise<T> {
    const res = await this.request<T>({ method: "POST", url, data });
    return res.data;
  }
}
