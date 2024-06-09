import React from "react";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Profile = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text>Profile</Text>
    </View>
  </SafeAreaView>
);

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}) as any;
