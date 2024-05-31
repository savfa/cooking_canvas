import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          Регистрация
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}) as any;