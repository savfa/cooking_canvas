import { AxiosInstance } from "axios";

export const setAPIAuthHeaders = (api: AxiosInstance, token: string): void => {
  try {
    if (token) {
      // eslint-disable-next-line no-param-reassign
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      // eslint-disable-next-line no-param-reassign
      delete api.defaults.headers.common.Authorization;
    }
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.log(err.name);
    // eslint-disable-next-line no-console
    console.log(err.message);
  }
};
