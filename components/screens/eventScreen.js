import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {DataEvent} from '../../model/dataEvent'
import CardEvent from '../action/cardEvent'

export const event = ({navigation}) => {

  const renderItem = ({item}) => {
    return (
      <CardEvent 
          itemData={item}
          onPress={() => navigation.navigate('EventDetail', {itemData:item})}
       />
    );
  };

  return (
    <View style={styles.container}>
        <FlatList 
            data={DataEvent}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    alignSelf: 'center'
  },
});

