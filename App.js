import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { AuthContext } from './context';

//icon
import  Icons from 'react-native-vector-icons/MaterialCommunityIcons';

// import screens
import {alumni }       from './components/screens/alumniScreen';
import {event}         from './components/screens/eventScreen';
import {createScreen }  from './components/screens/createScreen';
import {galeri }       from './components/screens/galeriScreen';
import {hiring }       from './components/screens/hiringScreen';
import {home }         from './components/screens/homeScreen';
import {info }         from './components/screens/infoScreen';
import {jadwal }       from './components/screens/jadwalScreen';
import {kampus}         from './components/screens/kampusScreen';
import {login, signUp} from './components/screens/loginScreen';
import {profile}       from './components/screens/profileScreen';
import {Splash }       from './components/screens/loadingScreen';

 

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
     <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen 
            name="loginScreen" 
            component={login} 
            options={{title :'Login'}}/>
        <AuthStack.Screen 
            name="CreateAccount" 
            component={signUp}
            options={{title :'Create Account'}} />
    </AuthStack.Navigator>
);


const RootStack = createStackNavigator();
const RootStackScreen = ({userToken}) => (
      <RootStack.Navigator headerMode="none">
        {userToken ? (
          <RootStack.Screen 
                name="home" 
                component={DrawerStackScreen}
                options={{animationEnabled:false}}/>
        ):(
          <RootStack.Screen 
                name="App" 
                component={AuthStackScreen} 
                options={{animationEnabled:false}}/>

        )}       
      </RootStack.Navigator>
);

const DrawerStack = createDrawerNavigator();
const DrawerStackScreen = () => (
  <DrawerStack.Navigator initialRouteName="Home">
    <DrawerStack.Screen name="Home" component={TabStackScreen}/>
    <DrawerStack.Screen name="Profile" component={ProfileStackScreen}/>
  </DrawerStack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabStackScreen  = () => (
     <Tab.Navigator>
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
                name="Profile" 
                component={ProfileStackScreen}
                options={{
                  tabBarLabel: 'PROFILE',
                  tabBarIcon: ({ color }) => (
                  <Icons name="face-profile" color={color} size={26}/> ), }}
                />
     </Tab.Navigator>
);
    
const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
     <HomeStack.Navigator
        headerMode='screen' 
        screenOptions={{ 
          headerTintColor:'white',
          headerStyle: {backgroundColor: '#00008b'},
          headerTitleAlign:'center'
        }}
     >
        <HomeStack.Screen name="Home"   component={home}   options={{title:'C&P MOBILE SERVICES',}}/>
        <HomeStack.Screen name="Info"   component={info}   options={{title:'INFO C&P ',}}/>
        <HomeStack.Screen name="Event"  component={event}  options={{title:'EVENTS',}}/>
        <HomeStack.Screen name="Hiring" component={hiring} options={{title:'HIRING KAMPUS',}}/>
        <HomeStack.Screen name="Galeri" component={galeri} options={{title:'GALERI',}}/>
        <HomeStack.Screen name="Alumni" component={alumni} options={{title:'ALUMNI LP3I',}}/>
        <HomeStack.Screen name="Kampus" component={kampus} options={{title:'LP3I COLLEGE PURWAKARTA',}}/>
     </HomeStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
      <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={profile}/>
      </ProfileStack.Navigator>
);


const ScheduleStack = createStackNavigator();
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



