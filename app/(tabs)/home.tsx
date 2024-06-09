import React from "react";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Home = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text>Home</Text>
    </View>
  </SafeAreaView>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}) as any;
