import { combineReducers, configureStore } from "@reduxjs/toolkit";


import {deleteUserAuthToken} from "@/helpers/utils/asyncStorage";
import NameSpace from "@/store/NameSpace";
import {createAPI, setDispatch} from "@/helpers/api";
import { appReducer} from "@/store/app/app";


const api = createAPI(async () => {
  // localStorage.removeItem(`token`);
  await deleteUserAuthToken();
});

const rootReducer = combineReducers({
  [NameSpace.APP]: appReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      serializableCheck: true,
    }),
});

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setDispatch(store.dispatch);

export default store;
