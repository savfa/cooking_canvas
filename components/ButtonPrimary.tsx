import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface InterfaceButtonPrimary {
  text: string;
  handlePress: any;
  style?: any
}

const ButtonPrimary = ({text, handlePress, style, ...rest}: InterfaceButtonPrimary) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.5}
      onPress={handlePress}
      {...rest}
    >
      <Text style={[styles.buttonText]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#FF6B00'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 30,
    textTransform: 'uppercase',
    paddingTop: 8,
    paddingBottom: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
