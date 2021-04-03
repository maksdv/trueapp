import React, { useContext } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home} from '../screens/home/Home';
import { View } from 'react-native';
import { Switch } from '../components/switch/Switch';
import {useTheme} from '../utils/theme/ThemeProvider';

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
  const {colors, isDark} = useTheme();
  return (
    <Drawer.Navigator initialRouteName="Home" drawerType="slide"
    drawerContentOptions={{
      activeTintColor: colors.text,
      inactiveTintColor: colors.text,
      itemStyle: { marginVertical: 10 }}
    }
    drawerContent={props => {
      return (
        <DrawerContentScrollView style={{backgroundColor: colors.background}} {...props}>
          <DrawerItemList {...props} />
          <View style={{}}><Switch /></View>
        </DrawerContentScrollView>
      )
    }}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="ee" component={HomeStack} />
      <Drawer.Screen name="erree" component={HomeStack} />
      <Drawer.Screen name="Hoeeeeme" component={HomeStack} />
    </Drawer.Navigator>

  );
};

export default AppStack;