import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {homeScreen } from './screens/homeScreen';
import {carouselcreen } from './screens/carouselScreen';
import {Splash } from './screens/loadingScreen';

const AuthStack = createStackNavigator();

export default() => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect( ()=> {
      setTimeout(()=> {
        setIsLoading(false);
      }, 1000);
  }, []);

  if (isLoading){
    return <Splash />;
  }

  return(
      <NavigationContainer>
        <AuthStack.Navigator>
        <AuthStack.Screen 
            name="homeScreen" 
            component={homeScreen} 
            options={{title :'CNP LP3I College Purwakarta'}}/>
        </AuthStack.Navigator>
      </NavigationContainer>
  );
}

