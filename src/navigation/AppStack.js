import React, { useContext } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from './AuthProvider';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home} from '../screens/home/Home';
import { View } from 'react-native';
import { Switch } from '../components/switch/Switch';
import {useTheme} from '../utils/theme/ThemeProvider';
import { CustomButton } from '../components/buttons/CustomButton';
import { Profile } from '../components/profile/Profile';
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  const {colors} = useTheme();
  return (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={({navigation}) => ({
        headerTitle:'True App',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: colors.buy,
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
          fontWeight: 'bold'
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
          backgroundColor: colors.background
        },
        headerLeft:() => (
          <View style={{padding:10}}><MaterialCommunityIcons style={{fontSize:20, color:colors.buy}} name='menu' onPress={() => navigation.openDrawer()}/></View>
        )
      })}
    />
    
  </Stack.Navigator>
  );
};

const AppStack = () => {
  const {logout, user} = useContext(AuthContext);
  const {colors} = useTheme();
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
          <Profile name={user.email} src={require('../utils/source/alf.jpeg')} />
          <DrawerItemList {...props} />
          <View style={{}}><Switch /></View>
          <View style={{padding:10}}><CustomButton text='Log Out' color='red' onPress={() => logout()} /></View>
        </DrawerContentScrollView>
      )
    }}>
      <Drawer.Screen name="Home" component={HomeStack}/>  
      <Drawer.Screen name="Example" component={HomeStack} />
      <Drawer.Screen name="Example2" component={HomeStack} />
      <Drawer.Screen name="HoExample3" component={HomeStack} />
    </Drawer.Navigator>

  );
};

export default AppStack;