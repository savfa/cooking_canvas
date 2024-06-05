import { createSlice } from "@reduxjs/toolkit";
import NameSpace from "../NameSpace";
import { AxiosInstance } from "axios";
// eslint-disable-next-line import/no-cycle
import { AppDispatch, StoreState } from "@/store";
import {getUserAuthToken} from "@/helpers/utils/asyncStorage";
import {setAPIAuthHeaders} from "@/helpers/api";
import {ServerURL} from "@/helpers/constants/routes";

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
      authorizationStatus: action.payload,
    }),
  },
});

const { actions, reducer }: any = app;

const Operation = {
  checkAuth: () => async (dispatch: AppDispatch, getState: () => StoreState, api: AxiosInstance) => {
    console.log(`here`)
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
      .catch(() => {
        dispatch(actions.setAuthorization(AuthorizationStatus.NO_AUTH));
      });
  },
};

export {
  reducer as appReducer,
  actions as AppActionCreator,
  Operation as AppOperation,
};
