import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const galeri= ({Navigation}) => {
  return (
    <View style={styles.container}>
          <Text>Galeri screen</Text>
       

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
   button: {
    borderRadius:10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 2,
    shadowRadius: 5 ,
    shadowOffset : { width: 1, height: 13},
  }, 
});
