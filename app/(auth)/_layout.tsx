import React from 'react';

import {Text, View} from 'react-native';
import {Colors} from "@/constants/Colors";
import {Tabs} from "expo-router";
import {TabBarIcon} from "@/components/navigation/TabBarIcon";

const AuthLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blue',
      }} >
      <Tabs.Screen
        name="login"
        options={{
          title: 'Вход',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: 'Регистрация',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  )
};

export default AuthLayout;
