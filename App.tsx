// App.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/Navigation';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
