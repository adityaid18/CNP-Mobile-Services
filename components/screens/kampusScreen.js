import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const kampus = () => {
  return (
    <View style={styles.container}>
          <Text>Kampus screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
