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
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
}) as any;
