import React from 'react';

import {Tabs} from "expo-router";
import {TabBarIcon} from "@/components/navigation/TabBarIcon";
import {AppRoute} from "@/helpers/constants/routes";

const AuthLayout = () => {
  return (
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
  )
};

export default AuthLayout;
