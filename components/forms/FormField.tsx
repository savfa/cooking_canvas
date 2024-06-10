import React, { useState } from "react";

import { StyleSheet, TextInput, View } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";

interface IFormField {
  placeholder?: string;
  containerStyle?: any;
  inputStyle?: any;
  beforeIconName?: string | any;
  handleBeforeIcon?: () => void;
  afterIconName?: string | any;
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
    handleBeforeIcon,
    afterIconName,
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
          style={styles.leftIcon}
          name={beforeIconName}
          {...(handleBeforeIcon && { onPress: handleBeforeIcon })}
        />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="white"
        selectionColor="transparent"
        secureTextEntry={isSecure}
        style={[styles.input, inputStyle]}
        {...rest}
      />
      {afterIconName && (
        <Octicons
          size={28}
          style={styles.leftIcon}
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
    marginRight: 10,
  },
  rightIcon: {
    color: "white",
    marginLeft: 10,
  },
}) as any;
