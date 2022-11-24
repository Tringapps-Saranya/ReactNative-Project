import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home,Cart,ProductsList} from '../components/screens';
import {TouchableOpacity, StyleSheet} from 'react-native';
import home_tab_icon from '../assets/images/home_tab_icon.png';
import cart_tab_icon from '../assets/images/cart_tab_icon.png';
import shopping_icon from '../assets/images/shopping_icon.png';
import menu_icon from '../assets/images/menu_icon.png';
import { colors } from '../shared/styles/colors';
import ImageAtom from '../components/atoms/ImageAtom';
import screenConstant from '../components/screens/ScreenConstants';

export const BottomTabNavigator = ({navigation}) => {
  const Tab = createBottomTabNavigator();

  const toOpenDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blue,
        },
        headerTitleStyle: {
          color: colors.white,
        },
        tabBarStyle: {
          backgroundColor: colors.blue,
        },
      }}>
      <Tab.Screen
        name={screenConstant.HOME}
        component={Home}
        options={{
          tabBarIcon: () => (
            <ImageAtom
              source={home_tab_icon}
              alt="homeicon"
              imageStyle={styles.icon_Container}
            />
          ),
          tabBarLabel: '',
          headerLeft:()=>(
            <TouchableOpacity onPress={toOpenDrawer}>
              <ImageAtom 
                 source={menu_icon}
                 alt="menuicon" 
                 imageStyle={styles.menuIcon} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name={screenConstant.PRODUCT_LIST}
        component={ProductsList}
        options={{
          tabBarIcon: () => (
            <ImageAtom
              source={shopping_icon}
              alt="shoppingicon"
              imageStyle={styles.icon_Container}
            />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name={screenConstant.CART}
        component={Cart}
        options={{
          tabBarIcon: () => (
            <ImageAtom
              source={cart_tab_icon}
              alt="carticon"
              imageStyle={styles.icon_Container}
            />
          ),
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({

  icon_Container:{
    width: 28,
    height: 28,
    marginTop: 12
  },

  menuIcon: {
    marginLeft: 15,
    marginRight: 10,
  },

});
