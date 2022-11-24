import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image, StyleSheet} from 'react-native';
import home_icon from '../assets/images/home_icon.png'
import CustomDrawer from '../components/organisms/CustomDrawer';
import {BottomTabNavigator} from './BottomTabNavigator';
import ImageAtom from '../components/atoms/ImageAtom';
import screenConstant from '../components/screens/ScreenConstants';


const DrawerNavigation = () => {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={screenConstant.BOTTOM_TAB}
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          drawerIcon: () => (
            <ImageAtom
              source={home_icon}
              alt="homeicon"
              imageStyle={styles.home_icon}
            />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({

  home_icon : {
    width: 25,
    height: 25, 
    marginRight: -20
  }
 
});

export default DrawerNavigation;
