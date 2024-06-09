import NameSpace from "@/store/NameSpace";

export const getIsLoader = (state: any) => state[NameSpace.APP].isLoader;

export const getAuthorizationStatus = (state: any) =>
  state[NameSpace.APP].authorizationStatus;

export const getUser = (state: any) => state[NameSpace.APP].user;
