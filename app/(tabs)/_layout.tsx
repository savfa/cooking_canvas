import React from "react";

import { Redirect, Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { AppRoute } from "@/helpers/constants/routes";
import { useSelector } from "react-redux";
import { getAuthorizationStatus } from "@/store/app/selectors";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { useColorScheme } from "@/helpers/hooks/useColorScheme";
import { Colors } from "@/helpers/constants/Colors";

const AuthLayout = () => {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.safeArea}>
      {authorizationStatus !== `AUTH` && <Redirect href={AppRoute.LOGIN} />}

      <Tabs
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          tabBarInactiveTintColor: "#707070",
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarStyle: {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            // backgroundColor: "#5f720f",
          },
        }}>
        <Tabs.Screen
          name={AppRoute.HOME.replace(`/`, ``)}
          options={{
            headerShown: false,
            title: "Главная",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name="home" color={color} />
            ),
            tabBarLabel: ``,
          }}
        />
        <Tabs.Screen
          name={AppRoute.FAVORITES.replace(`/`, ``)}
          options={{
            title: "Избранное",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name="heart" color={color} />
            ),
            tabBarLabel: ``,
          }}
        />
        <Tabs.Screen
          name={AppRoute.CREATE_RECIPE.replace(`/`, ``)}
          options={{
            title: "Добавить рецепт",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name="plus" color={color} />
            ),
            tabBarLabel: ``,
          }}
        />
        {/* todo: показывать когда авторизован */}
        <Tabs.Screen
          name={AppRoute.PROFILE.replace(`/`, ``)}
          options={{
            title: "Профиль",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name="person" color={color} />
            ),
            tabBarLabel: ``,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
}) as any;
