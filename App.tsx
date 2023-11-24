// App.tsx
import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Navigation from './src/Navigation';
import { GlobalColors } from './src/Assets/GlobalColors';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={GlobalColors.white} barStyle="dark-content" />
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
