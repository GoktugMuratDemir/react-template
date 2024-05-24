// src/api/DeleteClient.ts
import HttpClient from "./HttpClient";

export default class DeleteClient extends HttpClient {
  async delete<T>(url: string): Promise<T> {
    const res = await this.request<T>({ method: "DELETE", url });
    return res.data;
  }
}