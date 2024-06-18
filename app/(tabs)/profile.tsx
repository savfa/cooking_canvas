import React from "react";

import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Avatar from "@/components/Avatar";
import SectionPrimary from "@/components/SectionPrimary";
import { useSelector } from "react-redux";
import { getUser } from "@/store/app/selectors";
import { ThemedText } from "@/components/ThemedText";
import { HelloWave } from "@/components/HelloWave";
import { ThemedView } from "@/components/ThemedView";

const Profile = () => {
  const user = useSelector(getUser);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView}>
        <SectionPrimary>
          <Avatar avatarUrl={user.avatar} />
        </SectionPrimary>

        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Привет мир!</ThemedText>
          <HelloWave />
        </ThemedView>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    minHeight: "100%",
  },
}) as any;
