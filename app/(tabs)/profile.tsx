import React from "react";

import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Avatar from "@/components/Avatar";
import SectionPrimary from "@/components/SectionPrimary";

const Profile = () => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <ScrollView style={styles.scrollView}>
      <SectionPrimary>
        <Avatar />
      </SectionPrimary>
    </ScrollView>
  </View>
);

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
