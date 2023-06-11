import * as React from 'react';
import MyNavigation from './navigation/myNavigation';
import Card from './components/card';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MyNavigation />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});