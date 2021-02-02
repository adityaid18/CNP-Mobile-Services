import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import {Ionicons, AntDesign, MaterialCommunityIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';


export const homeScreen = () => {
   return (
    <View style={styles.container}>

      <View>
        <Image
             source={{
               uri:"../assets/splash.png"
             }}   
        />
      </View>


        <View style={styles.row}>
          <View style={styles.row_child}>
            <TouchableOpacity style={styles.button} onPress={() => alert('TODO')}>
               <AntDesign name="notification" size={50} color="black" />
                <Text style={{textAlign:'center'}}>Info</Text>
            </TouchableOpacity>          
          </View>
          
        <View style={styles.row_child}>
          <TouchableOpacity style={styles.button} onPress={() => alert('TODO')}>
            <MaterialIcons name="event" size={50} color="black" />
             <Text style={{textAlign:'center'}}>event</Text>
          </TouchableOpacity>    
        </View>

        <View style={styles.row_child}>
          <TouchableOpacity style={styles.button} onPress={() => alert('TODO')}>
              <FontAwesome name="archive" size={50} color="black" />
              <Text style={{textAlign:'center'}}>Hiring</Text>
          </TouchableOpacity>    
        </View>     
        </View>


        <View style={styles.row_2}>
          <View style={styles.row_child}>
            <TouchableOpacity style={styles.button} onPress={() => alert('TODO')}>
                <AntDesign name="picture" size={50} color="black" />
                <Text style={{textAlign:'center'}}>Galeri</Text>
            </TouchableOpacity>          
          </View>
          
        <View style={styles.row_child}>
          <TouchableOpacity style={styles.button} onPress={() => alert('TODO')}>
            <MaterialCommunityIcons name="human-male-male" size={50} color="black" />
             <Text style={{textAlign:'center'}}>Alumni</Text>
          </TouchableOpacity>    
        </View>

        <View style={styles.row_child}>
          <TouchableOpacity style={styles.button} onPress={() => alert('TODO')}>
              <MaterialCommunityIcons name="office-building" size={50} color="black" />
              <Text style={{textAlign:'center'}}>Kampus</Text>
          </TouchableOpacity>    
        </View>     
        </View>


        <View style={styles.videos_range}>
          <Text>Video Terbaru</Text>
            <View style={{paddingLeft:180}}>
            <TouchableOpacity onPress={() => alert('TODO')}>
              <Text style={{color:'#00ff'}}>Lihat Semua</Text>
            </TouchableOpacity>
            </View>
        </View>
        
      
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
  row : {    
    flexDirection: 'row',
    paddingLeft: 40,
  },
  row_2 : {    
    flexDirection: 'row',
    paddingLeft: 40,
    paddingTop: 10,
  },
  row_child: {
    flex: 1,
    width: 120,
    flexDirection: 'row',
  },
  videos_range: {
    paddingTop:20,
    flexDirection: 'row',
    
  }
});


