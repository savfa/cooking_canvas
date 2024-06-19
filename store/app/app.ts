import { createSlice } from "@reduxjs/toolkit";
import NameSpace from "../NameSpace";
import { AxiosError, AxiosInstance } from "axios";
import { AppDispatch, StoreState } from "@/store";
import {
  deleteUserAuthToken,
  getUserAuthToken,
  setUserAuthToken,
} from "@/helpers/utils/asyncStorage";
import { ServerURL } from "@/helpers/constants/routes";
import { setAPIAuthHeaders } from "@/helpers/utils/setAPIAuthHeaders";
import { getConfigUploadFile } from "@/helpers/utils/getConfigUploadFile";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  WAIT_SERVER_RESPONSE: `WAIT_SERVER_RESPONSE`,
};

const initialState: any = {
  isLoader: false,
  authorizationStatus: AuthorizationStatus.WAIT_SERVER_RESPONSE,
  user: {},
};

const app = createSlice({
  name: NameSpace.APP,
  initialState,
  reducers: {
    setLoader: (state: any, action: any): any => ({
      ...state,
      isLoader: action.payload,
    }),
    setAuthorization: (state: any, action: any): any => ({
      ...state,
      authorizationStatus: action.payload,
    }),
    setUser: (state: any, action: any): any => ({
      ...state,
      user: action.payload,
    }),
  },
});

const { actions, reducer }: any = app;

const Operation = {
  checkAuth:
    () =>
    async (
      dispatch: AppDispatch,
      getState: () => StoreState,
      api: AxiosInstance
    ) => {
      const token = await getUserAuthToken();
      if (!token) {
        dispatch(actions.setAuthorization(AuthorizationStatus.NO_AUTH));
        return Promise.resolve();
      }
      setAPIAuthHeaders(api, token);

      return api
        .get(ServerURL.USER)
        .then((response) => {
          const { data: user } = response.data;
          dispatch(actions.setUser(user));
          dispatch(actions.setAuthorization(AuthorizationStatus.AUTH));

          return user;
        })
        .catch((error: AxiosError) => {
          dispatch(actions.setAuthorization(AuthorizationStatus.NO_AUTH));
          // todo нужно делать запрос на рефреш токен
          deleteUserAuthToken();
        });
    },
  authorizeUser:
    (user: any, accessToken: string) =>
    async (
      dispatch: AppDispatch,
      getState: () => StoreState,
      api: AxiosInstance
    ) => {
      await setUserAuthToken(accessToken);
      setAPIAuthHeaders(api, accessToken);
      dispatch(actions.setUser(user));
      dispatch(actions.setAuthorization(AuthorizationStatus.AUTH));

      return AuthorizationStatus.AUTH;
    },
  login:
    ({ email, password }: { email: string; password: string }) =>
    (dispatch: AppDispatch, getState: () => StoreState, api: AxiosInstance) =>
      api
        .post(ServerURL.LOGIN, { email, password })
        .then((response) => {
          const {
            user,
            token: { access: accessToken },
          } = response.data;

          dispatch(Operation.authorizeUser(user, accessToken));

          return user;
        })
        .catch((error: AxiosError) => {
          console.log(error);
        }),
  register:
    ({
      firstName,
      email,
      password,
    }: {
      firstName: string;
      email: string;
      password: string;
    }) =>
    (dispatch: AppDispatch, getState: () => StoreState, api: AxiosInstance) =>
      api
        .post(ServerURL.REGISTER, { firstName, email, password })
        .then((response) => {
          const {
            user,
            token: { access: accessToken },
          } = response.data;

          dispatch(Operation.authorizeUser(user, accessToken));

          return user;
        })
        .catch((error: AxiosError) => {
          console.log(error);
        }),
  logout:
    () =>
    async (
      dispatch: AppDispatch,
      getState: () => StoreState,
      api: AxiosInstance
    ) => {
      setAPIAuthHeaders(api, "");
      await deleteUserAuthToken();
      dispatch(actions.setUser({}));
      dispatch(actions.setAuthorization(AuthorizationStatus.NO_AUTH));

      return Promise.resolve("logout");
    },
  uploadUserAvatar:
    (formData: any, setProgress?: any) =>
    async (
      dispatch: AppDispatch,
      getState: () => StoreState,
      api: AxiosInstance
    ) => {
      const configUploadFile = getConfigUploadFile(setProgress);

      return api
        .post(ServerURL.USER_UPLOAD_AVATAR, formData, configUploadFile)
        .then((response) => {
          const { data: user } = response.data;
          dispatch(actions.setUser(user));

          return user;
        });
    },
};

export {
  reducer as appReducer,
  actions as AppActionCreator,
  Operation as AppOperation,
};
