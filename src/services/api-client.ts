import axios, { AxiosRequestConfig } from "axios"

export interface FetchResponse<T> {
  count: number
  next: string | null
  results: T[]
}

const axiosInstant = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e0d20000ca914e34a948acbba903f3c0", // in production import from env
  },
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstant
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data)
  }

  get = (id: number | string) => {
    return axiosInstant.get<T>(this.endpoint + "/" + id).then((res) => res.data)
  }
}

export default APIClient
