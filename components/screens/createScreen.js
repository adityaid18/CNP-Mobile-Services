import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'react-native-elements';
import {AuthContext} from '../../context';
import * as firebase from 'firebase';

export const create = ({navigation}) => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
          <Input
              placeholder='Nama Lengkap'
              autoCapitalize='none'
              leftIcon={
                    <Icon
                      name='user'
                      size={24}
                     color='black'
                    />
                  }
            />  
            <Input
              placeholder='Email'
               autoCapitalize='none'
               leftIcon={
                    <Icons
                      name='email'
                      size={24}
                     color='black'
                    />
                  }
            />  
            <Input
              placeholder='Password'
              autoCapitalize='none'
              secureTextEntry
                leftIcon={
                    <Icons
                      name='onepassword'
                      size={24}
                     color='black'
                    />
                  }
            />  

           <View>
            <TouchableOpacity 
                    style={styles.button}
                    onPress={() => signUp()}>
              <Text style={{color:'#fff'}}>DAFTAR BARU</Text>
            </TouchableOpacity>
        </View>
         <View style={{paddingTop:15}}>
            <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('loginScreen')}>
              <Text style={{color:'#fff'}}>LOGIN</Text>
            </TouchableOpacity>
        </View>
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
    paddingTop:80
  },
  button: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#00ff',
    elevation: 2, // Android
    height: 50,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
},
});
