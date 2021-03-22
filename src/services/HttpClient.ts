import axios, { AxiosInstance } from "axios";

import { REQUEST_TIMEOUT } from "constants/api";

class HttpClient {
  protected readonly instance: AxiosInstance;

  constructor(API_BASE_URL: string) {
    this.instance = axios.create({
      baseURL: API_BASE_URL,
      timeout: REQUEST_TIMEOUT,
    });
  }
}

export { HttpClient };
