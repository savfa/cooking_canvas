import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface InterfaceButtonPrimary {
  text: string;
  handlePress: any;
  style?: any;
}

const ButtonPrimary = ({
  text,
  handlePress,
  style,
  ...rest
}: InterfaceButtonPrimary) => {
  const [opacity, setOpacity] = useState(1);

  return (
    <Pressable
      style={[styles.button, style, { opacity }]}
      onPress={handlePress}
      onPressIn={() => setOpacity(0.5)}
      onPressOut={() => setOpacity(1)}
      {...rest}>
      <Text style={[styles.buttonText]}>{text}</Text>
    </Pressable>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "#FF6B00",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
    paddingTop: 8,
    paddingBottom: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
