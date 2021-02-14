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


const MIN_HEIGHT = Platform.OS === 'android' ? 50 : 10;
const MAX_HEIGHT = 250;

export const hiringDetail = ({route}) => {
    const itemData = route.params.itemData;
    const navTitleView = useRef(null);
  
  return (
    <View style={styles.container}>
    <ImageHeaderScrollView
    maxHeight={MAX_HEIGHT}
    minHeight={MIN_HEIGHT}
    maxOverlayOpacity={0.6}
    minOverlayOpacity={0.3}
    foregroundParallaxRatio={3}
    renderHeader={() => (
      <Image source={itemData.image} style={styles.image}/>  
    )}
    renderForeground={() => (
        <View style={styles.titleContainer}>
             <Text style={styles.imageTitle}>{itemData.title}</Text>
        </View>
    )}
    renderFixedForeground={() => (
        <Animatable.View style={styles.navTitleView} ref={navTitleView}>
            <Text style={styles.navTitle}>{itemData.title}</Text>
        </Animatable.View>
    )}   
    >
    
     <TriggeringView 
            style={styles.section}
            onHide={() => navTitleView.current.fadeInUp(200)}
            onDisplay={() => navTitleView.current.fadeOut(100)}
            >
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>Overview</Text>
        </View>
     </TriggeringView>

    <View style={[styles.section, styles.sectionLarge]}>
         <Text style={styles.sectionContent}>{itemData.description}</Text>
    </View>

     
    </ImageHeaderScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
   title: {
    fontSize: 20,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode:'cover'
  },
   imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
   sectionLarge: {
    minHeight: 300,
  },

   
});
