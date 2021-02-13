import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {data} from '../../model/data'
import Card from '../action/card'


export const hiring = ({navigation}) => {

  const renderItem = ({item}) => {
    return (
      <Card 
          itemData={item}
          onPress={() => navigation.navigate('HiringDetail', {itemData:item})}
      />
    );
  };


  return (
    <View style={styles.container}>
        <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center'
  },
});
