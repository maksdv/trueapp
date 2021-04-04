import React, { useContext } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from './AuthProvider';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home} from '../screens/home/Home';
import { Image, View } from 'react-native';
import { Switch } from '../components/switch/Switch';
import {useTheme} from '../utils/theme/ThemeProvider';
import { CustomButton } from '../components/buttons/CustomButton';

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
  const {logout, user} = useContext(AuthContext);
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
          <View><Image /></View>
          <DrawerItemList {...props} />
          <View style={{}}><Switch /></View>
          <View style={{padding:10}}><CustomButton text='Log Out' color='red' onPress={() => logout()} /></View>
        </DrawerContentScrollView>
      )
    }}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Example" component={HomeStack} />
      <Drawer.Screen name="Example2" component={HomeStack} />
      <Drawer.Screen name="HoExample3" component={HomeStack} />
    </Drawer.Navigator>

  );
};

export default AppStack;