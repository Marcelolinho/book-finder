import { Axios, AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const interceptRequest = (request: InternalAxiosRequestConfig) => {
  logger.info("a request is being made");
  return request;
};

const interceptSuccessResponse = (response: AxiosResponse) => {
  logger.debug("this is a successful response");
  return response;
};

const interceptorErrorResponse = (error: any) => {
  if (error instanceof Error) {
    const axiosError = error as AxiosError;
    logger.debug("this is an axios failure response");
  }

  return Promise.reject(error);
};

export const createAxiosInstance = (baseURL: string, headers: Record<string, string>) => {
  const axiosInstance = Axios.

  axiosInstance.interceptors.request.use(interceptRequest);
  axiosInstance.interceptors.response.use(interceptSuccessResponse, interceptorErrorResponse);

  return axiosInstance;
};