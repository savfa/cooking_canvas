import React from "react";

import { Redirect, Stack } from "expo-router";
import { AppRoute } from "@/helpers/constants/routes";
import { useSelector } from "react-redux";
import { getAuthorizationStatus } from "@/store/app/selectors";

const AuthLayout = () => {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <>
      {authorizationStatus === `AUTH` && <Redirect href={AppRoute.HOME} />}

      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
};

export default AuthLayout;
