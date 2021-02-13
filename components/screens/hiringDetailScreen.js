import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {data} from '../../model/data'
import Card from '../action/card'


export const hiringDetail = ({navigation}) => {

  return (
    <View style={styles.container}>
       <Text>Hiring</Text>
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
