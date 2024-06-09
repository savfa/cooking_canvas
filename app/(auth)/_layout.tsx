import React from "react";

import { Redirect, Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { AppRoute } from "@/helpers/constants/routes";
import { useSelector } from "react-redux";
import { getAuthorizationStatus } from "@/store/app/selectors";

const AuthLayout = () => {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <>
      {authorizationStatus === `AUTH` && <Redirect href={AppRoute.HOME} />}

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarStyle: { display: "none" }, // скрываем tabBar
        }}>
        <Tabs.Screen
          name={AppRoute.LOGIN.replace(`/`, ``)}
          options={{
            title: "Вход",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name={AppRoute.REGISTER.replace(`/`, ``)}
          options={{
            title: "Регистрация",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "code-slash" : "code-slash-outline"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default AuthLayout;
