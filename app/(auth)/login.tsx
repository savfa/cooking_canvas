import React from 'react';

import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {router} from "expo-router";

const LogIn = () => {

  const onPress = () => {
    router.push('/home')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          LogIn
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Войти</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}) as any;
