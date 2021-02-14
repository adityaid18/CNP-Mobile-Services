import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { AuthContext } from './context';

//icon
import  Icons from 'react-native-vector-icons/MaterialCommunityIcons';

// import screens
import {alumni }       from './components/screens/alumniScreen';
import {event  }       from './components/screens/eventScreen';
import {create }       from './components/screens/createScreen';
import {galeri }       from './components/screens/galeriScreen';
import {hiring }       from './components/screens/hiringScreen';
import {hiringDetail } from './components/screens/hiringDetailScreen';
import {home   }       from './components/screens/homeScreen';
import {info   }       from './components/screens/infoScreen';
import {jadwal }       from './components/screens/jadwalScreen';
import {kampus }       from './components/screens/kampusScreen';
import {login  }       from './components/screens/loginScreen';
import {profile}       from './components/screens/profileScreen';
import {Splash }       from './components/screens/loadingScreen';



const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ScheduleStack = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const AuthStackScreen = () => (
     <AuthStack.Navigator  
        headerMode='screen' 
        screenOptions={{ 
          headerTintColor:'white',
          headerStyle: {backgroundColor: '#00008b'},
          headerTitleAlign:'center'
        }}>
        <AuthStack.Screen 
            name="loginScreen" 
            component={login} 
            options={{title :'Login'}}/>
        <AuthStack.Screen 
            name="CreateAccount" 
            component={create}
            options={{title :'Pendaftaran Akun Baru'}} />
    </AuthStack.Navigator>
);


const RootStackScreen = ({userToken}) => (
      <RootStack.Navigator headerMode="none">
        {userToken ? (
          <RootStack.Screen 
                name="home" 
                component={ProfileStackScreen}
                options={{animationEnabled:false}}/>
        ):(
          <RootStack.Screen 
                name="App" 
                component={DrawerStackScreen} 
                options={{animationEnabled:false}}/>

        )}       
      </RootStack.Navigator>
);


const DrawerStackScreen = () => (
  <DrawerStack.Navigator initialRouteName="Home">
    <DrawerStack.Screen name="Home" component={TabStackScreen}/>
    <DrawerStack.Screen name="Profile" component={ProfileStackScreen}/>
  </DrawerStack.Navigator>
);


const TabStackScreen  = () => (
     <Tab.Navigator 
          aciveColor="#fff"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: '#00008b' }}
     >
        <Tab.Screen 
                name="Home" 
                component={HomeStackScreen}
                options={{
                  tabBarLabel: 'HOME',
                  tabBarIcon: ({ color }) => (
                  <Icons name="home" color={color} size={26}/> ), }}
                />
        <Tab.Screen 
                name="Jadwal" 
                component={ScheduleStackScreen}
                options={{
                  tabBarLabel: 'JADWAL',
                  tabBarIcon: ({ color }) => (
                  <Icons name="calendar-month" color={color} size={26}/> ), }}
                />
        <Tab.Screen 
                name="Auth" 
                component={AuthStackScreen}
                options={{
                  tabBarLabel: 'LOGIN',
                  tabBarIcon: ({ color }) => (
                  <Icons name="login" color={color} size={26}/> ), }}
                />
     </Tab.Navigator>
);

const HomeStackScreen = ({navigation}) => (
     <HomeStack.Navigator
        headerMode='screen' 
        screenOptions={{ 
          headerTintColor:'white',
          headerStyle: {backgroundColor: '#00008b'},
          headerTitleAlign:'center'
        }}
     >
        <HomeStack.Screen 
              name="Home"  
              component={home}   
              options={{
                title:'C&P MOBILE SERVICES',
                headerLeft: () => (
                      <View style={{marginLeft:10}}>
                      <Icons
                        name="menu"
                        size={25}
                        color="#fff"
                        backgroundColor="#00008b"
                        onPress={() => navigation.openDrawer()}
                      />
                      </View>
                )  
              }}/>
        <HomeStack.Screen 
                    name="Info"  
                    component={info}      
                    options={{title:'INFORMASI C&P ',}}/>
        <HomeStack.Screen
                    name="Event" 
                    component={event}     
                    options={{title:'EVENTS',}}/>
        <HomeStack.Screen 
                    name="Hiring"  
                    component={hiring}  
                    options={({route}) => ({
                      title: route.params.title,
                      headerBackTitleVisible: false
                      })}
                    />
        <HomeStack.Screen 
                    name="hiringDetail"
                    component={hiringDetail}
                    options={({route}) => ({
                      //title: route.params.title,
                    headerBackTitleVisible: false,
                    headerTitle: false,
                    headerTitle: false,
                    headerTransparent: true,
                    headerTintColor: '#fff'
                      })}
                    />
        <HomeStack.Screen 
                    name="Galeri"  
                    component={galeri}
                    options={{title:'GALERI',}}/>
        <HomeStack.Screen 
                    name="Alumni"    
                    component={alumni} 
                    options={{title:'ALUMNI LP3I',}}/>
        <HomeStack.Screen 
                    name="Kampus"   
                    component={kampus} 
                    options={{title:'DETAIL KAMPUS',}}/>
     </HomeStack.Navigator>
);


const ProfileStackScreen = () => (
      <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={profile}/>
      </ProfileStack.Navigator>
);



const ScheduleStackScreen =() => (
    <ScheduleStack.Navigator>
      <ScheduleStack.Screen name="Jadwal" component={jadwal}/>
    </ScheduleStack.Navigator>
);




export default() => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return{
      signIn : () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signUp : () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signOut : () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, [])

  React.useEffect( ()=> {
      setTimeout(()=> {
        setIsLoading(false);
      }, 1000);
  }, []);

  if (isLoading){
    return <Splash />;
  }

  return (
        <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <RootStackScreen userToken={userToken}/>
        </NavigationContainer>
        </AuthContext.Provider>
  );
}

