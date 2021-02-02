import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export const Splash = () => (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#00ff" />
    </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
