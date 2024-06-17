import React, { useState } from "react";

import { StyleSheet, TextInput, View } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";

interface IFormField {
  placeholder?: string;
  containerStyle?: any;
  inputStyle?: any;
  beforeIconName?: string | any;
  handleBeforeIcon?: () => void;
  beforeIconStyle?: any;
  afterIconName?: string | any;
  afterIconStyle?: any;
  handleAfterIcon?: () => void;
  secureTextEntry?: boolean;
  [key: string]: any; // остаточный параметр
}

const FormField = (props: IFormField) => {
  const {
    placeholder,
    containerStyle,
    inputStyle,
    beforeIconName,
    beforeIconStyle,
    handleBeforeIcon,
    afterIconName,
    afterIconStyle,
    handleAfterIcon,
    secureTextEntry,
    ...rest
  } = props;

  const [isSecure, setIsSecure] = useState(!!secureTextEntry);

  return (
    <View style={[styles.container, containerStyle]}>
      {beforeIconName && (
        <Octicons
          size={28}
          style={[styles.leftIcon, beforeIconStyle]}
          name={beforeIconName}
          {...(handleBeforeIcon && { onPress: handleBeforeIcon })}
        />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="white"
        secureTextEntry={isSecure}
        style={[styles.input, inputStyle]}
        {...rest}
      />
      {afterIconName && (
        <Octicons
          size={28}
          style={[styles.rightIcon, afterIconStyle]}
          name={afterIconName}
          {...(handleAfterIcon && { onPress: handleAfterIcon })}
        />
      )}
      {secureTextEntry && (
        <Octicons
          size={28}
          name={isSecure ? `eye` : `eye-closed`}
          style={styles.rightIcon}
          onPress={() => setIsSecure(!isSecure)}
        />
      )}
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    height: 50,
    paddingHorizontal: 10,
    color: "white",
    backgroundColor: "transparent",
  },
  leftIcon: {
    color: "white",
  },
  rightIcon: {
    color: "white",
  },
}) as any;
