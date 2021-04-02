import React, { useContext } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home} from '../screens/home/Home';
import { Text, View } from 'react-native';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={({navigation}) => ({
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
        headerLeft:() => (
          <View style={{padding:10}}><MaterialCommunityIcons style={{fontSize:20}} name='menu' onPress={() => navigation.openDrawer()}/></View>
        )
      })}
    />
    
  </Stack.Navigator>
  );
};

const AppStack = () => {

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      
    </Drawer.Navigator>

  );
};

export default AppStack;