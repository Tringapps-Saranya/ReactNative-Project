import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {EMAIL} from '../../redux/constant';
import {useDispatch} from 'react-redux';
import screenConstant from './ScreenConstants';
import TextAtom from '../atoms/TextAtom';
import TextField from '../atoms/TextField';
import Button from '../atoms/Button';
import {colors} from '../../shared/styles/colors';
import { fonts } from '../../shared/styles/fonts';

const SignInScreen = ({navigation}) => {

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const checkValidation = () => {
    let errors = {};

    if (formValues.email.length === 0) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email address is invalid';
    } else {
      errors.email = '';
    }

    if (!formValues.password) {
      errors.password = 'Password is required';
    } else if (formValues.password.length < 6) {
      errors.password = 'Password must be longer than 6 characters';
    } else {
      errors.password = '';
    }

    return errors;
  };

  const onSignInPressed = () => {
    setErrors(checkValidation(formValues));

    dispatch({
      type: EMAIL,
      user: formValues.email,
    });

    if (errors.email == '' && errors.password == '') {
      navigation.reset({
        index: 0,
        routes: [{name: screenConstant.DRAWER}],
      });
    }

    setFormValues({
      email: '',
      password: '',
    });
  };

  return (
    <View style={styles.container}>
      <TextAtom textStyle={styles.heading} title='Login' />
      <TextField
        textBoxStyle={styles.textField}
        placeholder="Enter Email Id"
        name="email"
        onChangeText={value => {
          setFormValues({...formValues, email: value});
          setErrors(checkValidation(formValues.email));
        }}
        value={formValues.email}
      />
      {errors.email && <Text style={styles.errorMessage}>{errors.email}</Text>}
      <TextField
        textBoxStyle={styles.textField}
        secureTextEntry={true}
        placeholder="Enter Password..."
        name="password"
        onChangeText={value => {
          setFormValues({...formValues, password: value});
          setErrors(checkValidation(formValues.password));
        }}
        value={formValues.password}
      />
      {errors.password && <Text style={styles.errorMessage}>{errors.password}</Text>}
      <Button title="Sign In" onPress={onSignInPressed} buttonStyle={styles.signInBtn} />
      <TextAtom textStyle={styles.signup} title='Dont have an account? Sign Up'/> 
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    fontWeight: '700',
    fontSize: 40,
    margin: 25,
    color: colors.PowderBlue,
  },

  textField: {
    width: '80%',
    height: 42,
    borderBottomWidth: 1,
    margin: 20,
  },

  
  errorMessage: {
    color: colors.red,
    alignSelf: 'flex-start',
    marginLeft: 40,
    fontSize: 17,
  },

  signInBtn: {
    width: 320,
    marginTop: 25,
    backgroundColor: colors.PowderBlue,
  },

  signup: {
    marginTop: 25,
    fontFamily: fonts.RobotoRegular,
    fontWeight: '700',
    fontSize: 17,
  },

});

export default SignInScreen;
