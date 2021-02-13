import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const alumni = () => {
  return (
    <View style={styles.container}>
          <Text style={{fontSize:17, fontWeight:'bold'}}>Testimoni Alumni terhadap Layanan Penempatan Kerja LP3I</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop:10,
    paddingLeft:10
  },
  
});
