// src/api/FormPostClient.ts
import HttpClient from "./HttpClient";

export default class FormPutClient extends HttpClient {
  async put<T>(url: string, data: FormData): Promise<T> {
    const res = await this.request<T>({
          method: "PUT",
          url,
          data,
          headers: {
              "Content-Type": "multipart/form-data",
          },
      });
      return res.data;
  }
}
