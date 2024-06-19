import React from "react";

import { View, StyleSheet } from "react-native";

const SectionPrimary = (props: any) => {
  const { children, style, ...rest } = props;

  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
};

export default SectionPrimary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
  },
}) as any;
