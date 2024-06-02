import React, { useState } from 'react';

import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

const FormField = ({ placeholder, style, ironIconName, secureTextEntry, ...props}: any) => {
  const [isSecure, setIsSecure] = useState(!!secureTextEntry);

  return (
    <View style={styles.container}>
      <Ionicons size={28} style={styles.leftIcon} name={ironIconName} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="white"
        selectionColor="transparent"
        secureTextEntry={isSecure}
        style={[styles.input, style]}
        {...props}/>
      {secureTextEntry && (
        <Ionicons
          size={28}
          name={isSecure ? `eye` : `eye-off` }
          style={styles.rightIcon}
          onPress={() => setIsSecure(!isSecure)}
        />
        )
      }
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  input: {
    flex: 1,
    fontSize: 18,
    height: 50,
    paddingHorizontal: 10,
    color: 'white',
    backgroundColor: 'transparent',
  },
  leftIcon: {
    color: 'white',
    marginRight: 10,
  },
  rightIcon: {
    color: 'white',
    marginLeft: 10,
  },
}) as any;
