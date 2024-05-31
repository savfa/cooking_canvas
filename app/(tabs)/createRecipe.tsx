import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const CreateRecipe = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          CreateRecipe
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CreateRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}) as any;