import { StatusBar } from 'expo-status-bar'; 
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Logo } from "../../componentes";

export const SplashScreen = () => {
  return (<View style={styles.container}>
    <Logo  />
    <Text>QR Code</Text>
    <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  

});