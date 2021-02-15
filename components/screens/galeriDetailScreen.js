import React, {useRef} from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Dimensions, 
    StatusBar, 
    Platform, 
    Image 
} from 'react-native';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MAX_HEIGHT = 450;

export const galeriDetail= ({route}) => {
   const itemData = route.params.itemData;

  return (
    <View style={styles.container}>
        <Image source={itemData.image} style={styles.image}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:50
  },
    image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode:'cover',

  },

});


