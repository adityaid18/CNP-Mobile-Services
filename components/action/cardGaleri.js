import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { Card } from 'react-native-elements';


const CardGaleri = ({itemData, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>

            
            <View>
                <Card>
                    <Image
                      source={itemData.image}  
                      style={{
                          width:300,
                          height: 200,
                          alignSelf:'center'
                          }}                      
                    />
                     <Text>{itemData.title}</Text>
                     <Text>{itemData.perusahaan}</Text>
                </Card>
           </View>
        </TouchableOpacity>
    );
};

export default CardGaleri;

const styles = StyleSheet.create({
card: {
    height: 200,
    marginVertical: 10,
    shadowColor: '#999',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom:40,
    borderBottomWidth:1
  },
});

