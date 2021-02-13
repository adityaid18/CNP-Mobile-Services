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
