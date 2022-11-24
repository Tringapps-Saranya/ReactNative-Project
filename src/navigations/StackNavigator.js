import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigator';
import {useSelector} from 'react-redux';
import {SignIn, ProductDetails} from '../components/screens';
import screenConstant from '../components/screens/ScreenConstants';


const Stack = createStackNavigator();

const StackNavigation = () => {
  
  const email = useSelector(state => state.email);


  return (
    <Stack.Navigator initialRouteName={email === '' ? screenConstant.SIGN_IN : screenConstant.HOME}>
      <Stack.Screen
        name={screenConstant.SIGN_IN}
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screenConstant.DRAWER}
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};
export default StackNavigation;
