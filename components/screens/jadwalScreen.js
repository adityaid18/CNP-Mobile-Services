import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export const jadwal = () => (
    <View style={styles.container}>
    <Text>Jadwal Screen</Text>
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
