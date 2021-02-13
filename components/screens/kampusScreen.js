import * as React from 'react';
import MapView , { Marker }from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome, MaterialIcons,Foundation } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import Banner from '../../assets/storage/kampus_lp3i.jpg'



export const kampus = () => {
const [region, setRegion] = React.useState({
    latitude: -6.53377009953356,
    longitude: 107.44187218509703,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009
  });



  return (
    <View style={styles.container}>

          <Image source={Banner} style={{ width: 400, height: 159 }} /> 
          <View style={{alignItems:'flex-start', paddingLeft:20, paddingBottom:20, paddingTop:10}}>
            <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="office-building" size={15} color="black" />
            <Text style={{fontWeight:'bold'}}>LP3I COLLEGE PURWAKARTA</Text>
            </View>
                  <View style={{flexDirection:'row'}}>
                  <MaterialCommunityIcons name="highway" size={15} color="black" />
                  <Text>+Jl. Terusan Ibrahim Singadilaga No. 27 Purwakarta 41115 </Text>
                  </View>
                           <View style={{flexDirection:'row'}}>
                            <Foundation name="telephone" size={15} color="black" />
                            <Text>0264-8304909</Text>
                            </View>
                                   <View style={{flexDirection:'row'}}>
                                    <MaterialIcons name="email" size={15} color="black" />
                                    <Text>purwakarta@lp3i.id</Text>
                                    </View>
          </View>
  
          <MapView 
          region={region}
          onRegionChangeComplete={region => setRegion(region)}
          style={{ flex: 1, width: "100%" , }}
          >
            <Marker coordinate={{ latitude: -6.53377009953356, longitude: 107.44187218509703 }} />
          </MapView>
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
