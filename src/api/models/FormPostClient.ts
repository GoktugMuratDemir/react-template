// src/api/FormPostClient.ts
import HttpClient from './HttpClient';

export default class FormPostClient extends HttpClient {
  async post<T>(url: string, data: FormData): Promise<T> {
    const res = await this.request<T>({
      method: 'POST',
      url,
      data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  }
}