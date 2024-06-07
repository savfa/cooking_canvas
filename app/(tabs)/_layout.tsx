import React from 'react';

import {Redirect, Tabs} from "expo-router";
import {TabBarIcon} from "@/components/navigation/TabBarIcon";
import {AppRoute} from "@/helpers/constants/routes";
import {useSelector} from "react-redux";
import {getAuthorizationStatus} from "@/store/app/selectors";

const AuthLayout = () => {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <>
      {authorizationStatus !== `AUTH` && (
        <Redirect href={AppRoute.LOGIN} />
      )}

      <Tabs
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: 'blue'
        }} >
        <Tabs.Screen
          name={AppRoute.HOME.replace(`/`, ``)}
          options={{
            title: 'Главная',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name={AppRoute.FAVORITES.replace(`/`, ``)}
          options={{
            title: 'Избранное',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'heart' : 'heart-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name={AppRoute.CREATE_RECIPE.replace(`/`, ``)}
          options={{
            title: 'Добавить рецепт',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'add-circle' : 'add-circle-outline'} color={color} />
            ),
          }}
        />
        {/*todo: показывать когда авторизован*/}
        <Tabs.Screen
          name={AppRoute.PROFILE.replace(`/`, ``)}
          options={{
            title: 'Профиль',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  )
};

export default AuthLayout;
