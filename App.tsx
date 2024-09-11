
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppHeader from './src/components/AppHeader'; // Adjust the path if needed

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Home" showBackButton={false} />
      <View style={styles.body}>
        <Text style={styles.text}>Welcome to the App!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default App;

