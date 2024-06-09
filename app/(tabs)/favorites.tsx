import React from "react";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Favorites = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text>Favorites</Text>
    </View>
  </SafeAreaView>
);

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}) as any;
