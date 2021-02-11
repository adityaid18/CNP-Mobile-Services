import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import banner from '../../assets/storage/pexels-cottonbro-4778621.jpg'


export const home = ({ navigation }) => {
   return (
      <SafeAreaView style={styles.container}>
       <ScrollView>

          <Image source={banner} style={{ width: 400, height: 159 }} /> 



          <View style={{paddingRight:170,paddingBottom:10,paddingTop:10}}>
            <Text>Layanan Penempatan Kerja ? </Text>
          </View>

   <View style={styles.row}>
          <View style={styles.row_child}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Info')}
                style={styles.button}           
                 >
                <AntDesign name="notification" size={50} color="black" />
               <Text style={{textAlign:'center'}}>Info</Text>
            </TouchableOpacity>          
          </View>
          
        <View style={styles.row_child}>
          <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Event')}
                 >
                <MaterialIcons name="event" size={50} color="black" />
                 <Text style={{textAlign:'center'}}>Event</Text>
          </TouchableOpacity>    
        </View>

        <View style={styles.row_child}>
          <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Hiring')}
            >
                <FontAwesome name="archive" size={50} color="black" />
                <Text style={{textAlign:'center'}}>Hiring</Text>
          </TouchableOpacity>    
        </View>     
  </View>


  <View style={styles.row_2}>
          <View style={styles.row_child}>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Galeri')}
              >
                <AntDesign name="picture" size={50} color="black" />
                <Text style={{textAlign:'center'}}>Galeri</Text>
            </TouchableOpacity>          
          </View>
          
        <View style={styles.row_child}>
          <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Alumni')}
               >
                <MaterialCommunityIcons name="human-male-male" size={50} color="black" />
                <Text style={{textAlign:'center'}}>Alumni</Text>
          </TouchableOpacity>    
        </View>

        <View style={styles.row_child}>
          <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate('Kampus')}
            >
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
        
<StatusBar style="dark" />
</ScrollView>
</SafeAreaView>
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
  },
   tinyBanner: {
    width: 500,
    height: 120,
    marginBottom:400
  },
});




