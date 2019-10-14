import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import Cards from './src/components/Cards';

console.log(Constants.statusBarHeight);

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Cards />
    </View>
  );
}
