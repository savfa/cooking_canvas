import React, { useMemo } from "react";

import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Avatar from "@/components/Avatar";
import SectionPrimary from "@/components/SectionPrimary";
import { useSelector } from "react-redux";
import { getUser } from "@/store/app/selectors";
import { ThemedText } from "@/components/ThemedText";
import ThemedScreen from "@/components/ThemedScreen";
import Octicons from "@expo/vector-icons/Octicons";

const Profile = () => {
  const user = useSelector(getUser);

  const listData = useMemo(
    () => [
      {
        key: "userBox",
        value: (
          // todo: заменить на Link
          <Pressable onPress={() => `в мои данные`}>
            <SectionPrimary style={styles.userBox}>
              <Avatar isHideEdit avatarUrl={user.avatar} />
              <View
                style={{
                  display: `flex`,
                  flexDirection: `row`,
                  alignItems: `center`,
                }}>
                <ThemedText type="subtitle">{`${user.lastName || ``} ${user.firstName || ``} ${user.patronymic || ``}`}</ThemedText>
                <Octicons
                  size={20}
                  name="arrow-right"
                  color="#000"
                  style={{ paddingLeft: 10 }}
                />
              </View>
            </SectionPrimary>
          </Pressable>
        ),
      },
      {
        key: "otherContent",
        value: (
          <SectionPrimary>
            <View>
              <ThemedText type="subtitle">контент с рецептами юзера</ThemedText>
            </View>
          </SectionPrimary>
        ),
      },
    ],
    [user.avatar, user.firstName, user.lastName, user.patronymic]
  );

  return (
    <ThemedScreen>
      <StatusBar barStyle="dark-content" />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          paddingBottom: 10,
        }}
        data={listData}
        renderItem={({ item: { value } }: any) => value}
      />
    </ThemedScreen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  userBox: {
    paddingTop: (StatusBar.currentHeight || 0) + 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}) as any;
