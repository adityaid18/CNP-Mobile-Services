import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {dataGaleri} from '../../model/dataGaleri'
import CardGaleri from '../action/cardGaleri'


export const galeri= ({navigation}) => {


   const renderItem = ({item}) => {
    return (
      <CardGaleri 
          itemData={ item }
          onPress={() => navigation.navigate('galeriDetail', { itemData:item })}
       />
    );
  };

  return (
      <View style={styles.container}>
        <FlatList 
            data={dataGaleri}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
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

