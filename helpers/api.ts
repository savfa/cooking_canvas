import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { AppActionCreator } from "@/store/app/app";

export const ServerError = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  NOT_ALLOWED: 405,
  INTERNAL_SERVER: 500,
};

export const BASE_SERVER_URL = `http://192.168.0.108:3001`; // http://192.168.0.108:3001 http://192.168.1.52:3001
const DISABLE_LOADER = `disableLoader`;

let dispatch: any;

export const disableLoader = (): { disableLoader: boolean } => ({
  [DISABLE_LOADER]: true,
});

export const setDispatch = (dispatchFunc: any): void => {
  if (!dispatch) {
    dispatch = dispatchFunc;
  }
};

export const createAPI = (onUnauthorized: any) => {
  let requestsInWorkCount = 0;

  const api: AxiosInstance = axios.create({
    baseURL: BASE_SERVER_URL,
    timeout: 60000,
    withCredentials: true,
  });

  const onSuccess = (response: AxiosResponse) => {
    if (
      !(DISABLE_LOADER in response.config) ||
      !response.config[DISABLE_LOADER]
    ) {
      requestsInWorkCount -= 1;
      if (requestsInWorkCount === 0) {
        dispatch(AppActionCreator.setLoader(false));
      }
    }

    return response;
  };

  const onFail = (err: AxiosError) => {
    const { response } = err;
    requestsInWorkCount = 0;
    let errorText = ``;
    dispatch(AppActionCreator.setLoader(false));
    if (!response && err.message.includes(`timeout of`)) {
      /* addMessage(
        createMessage(
          MessageType.ERROR,
          `Ошибка`,
          `Сервер не отвечает. Попробуйте обновить страницу.`
        )
      ); */
      return () => {};
    }
    if (!response) {
      // addMessage(createMessage(MessageType.ERROR, `Ошибка`, err.message));
      return () => {};
    }

    switch (response?.status) {
      case ServerError.UNAUTHORIZED:
        onUnauthorized();
        // Бросаем ошибку, потому что нам важно прервать цепочку промисов после истечения токена.
        throw err;
      case ServerError.NOT_FOUND:
        errorText = `(Код ошибки: 404) Используется не существующий метод. Попробуйте очистить кеш или позвоните нам`;
        break;
      case ServerError.NOT_ALLOWED:
        errorText = `(Код ошибки: 405) Используется устаревший метод. Попробуйте очистить кеш или позвоните нам`;
        break;
      case ServerError.INTERNAL_SERVER:
        errorText = `(Код ошибки: 500) Произошла непредвиденная ошибка в работе сервера. Позвоните нам или попробуйте позднее`;
        break;
      default:
        break;
    }
    if (errorText) {
      // addMessage(createMessage(MessageType.ERROR, `Ошибка`, errorText));
    }

    return Promise.reject(err);
  };

  const onSent = (config: InternalAxiosRequestConfig) => {
    // Для отключения лоадера для конкретного запроса последним параметром
    // в методе запроса вызвать функцию disableLoader()
    // api.post(ServerURL.url, data, disableLoader())
    if (!(DISABLE_LOADER in config) || !config[DISABLE_LOADER]) {
      requestsInWorkCount += 1;
      dispatch(AppActionCreator.setLoader(true));
    }

    return config;
  };

  const onReject = (err: AxiosError) => {
    requestsInWorkCount = 0;
    dispatch(AppActionCreator.setLoader(false));
    return Promise.reject(err);
  };

  api.interceptors.request.use(onSent, onReject);
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
