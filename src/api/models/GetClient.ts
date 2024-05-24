// src/api/GetClient.ts
import HttpClient from "./HttpClient";

export default class GetClient extends HttpClient {
  async get<T>(url: string, params = {}): Promise<T> {
    const res = await this.request<T>({ method: "GET", url, params });
    return res.data;
  }
}
