import React from "react";

import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/helpers/constants/Colors";

const ThemedScreen = (props: any) => (
  <ThemedView
    style={styles.container}
    lightColor={Colors.light.screenBackground}
    darkColor={Colors.dark.screenBackground}
    {...props}
  />
);

export default ThemedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}) as any;
