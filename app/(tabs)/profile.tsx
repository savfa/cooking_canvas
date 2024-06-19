import React from "react";

import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Avatar from "@/components/Avatar";
import SectionPrimary from "@/components/SectionPrimary";
import { useSelector } from "react-redux";
import { getUser } from "@/store/app/selectors";
import { ThemedText } from "@/components/ThemedText";
import { HelloWave } from "@/components/HelloWave";
import { ThemedView } from "@/components/ThemedView";
import ThemedScreen from "@/components/ThemedScreen";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = () => {
  const user = useSelector(getUser);

  return (
    <ThemedScreen>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView}>
        <SectionPrimary>
          <View style={styles.userWrap}>
            <Avatar avatarUrl={user.avatar} />
            <ThemedText type="title">{`${user.lastName || ``} ${user.firstName || ``} ${user.patronymic || ``}`}</ThemedText>
          </View>
        </SectionPrimary>

        <ThemedView>
          <ThemedText type="title">Привет мир!</ThemedText>
        </ThemedView>
      </ScrollView>
    </ThemedScreen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
  },
  userWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}) as any;
