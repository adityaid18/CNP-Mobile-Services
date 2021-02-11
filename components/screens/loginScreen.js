import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {AuthContext} from '../../context';
import myButton from '../action/myButton'

export const login = ({navigation}) => {
  const { signIn } = React.useContext(AuthContext);
  
  return (
    <View style={styles.container}>
          <Text>Login screen</Text>
          
        <View>
            <TouchableOpacity onPress={() => signIn()}>
              <Text style={{color:'#00ff'}}>Login</Text>
            </TouchableOpacity>
        </View>
        <View>
          
            <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
              <Text style={{color:'#00ff'}}>Create Account</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}


export const signUp = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
          <Text>Create Account screen</Text>
          
        <View>
            <TouchableOpacity onPress={() => signUp()}>
              <Text style={{color:'#00ff'}}>Login</Text>
            </TouchableOpacity>
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
});
