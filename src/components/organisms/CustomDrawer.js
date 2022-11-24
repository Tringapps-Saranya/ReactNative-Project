import {DrawerItemList} from '@react-navigation/drawer';
import React from 'react';
import {useDispatch} from 'react-redux';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {EMAIL} from '../../redux/constant';
import ImageAtom from '../atoms/ImageAtom';
import blank_profile from '../../assets/images/blank_profile.png';
import logout_icon from '../../assets/images/logout_icon.png';
import {colors} from '../../shared/styles/colors';
import TextAtom from '../atoms/TextAtom';

const CustomDrawer = props => {
  const logout = () => {
    dispatch({
      type: EMAIL,
      user: '',
    });

    props.navigation.navigate('SignIn');
  };

  const dispatch = useDispatch();

  const email = useSelector(state => state.email);

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <View style={styles.container}>
        <View>
          <View style={styles.profileImgContainer}>
            <ImageAtom
              source={blank_profile}
              alt="profile"
              imageStyle={styles.profileImg}
            />
          </View>
          <View style={styles.textContainer}>
            <TextAtom textStyle={styles.emailText} title={email} />
          </View>
          <DrawerItemList {...props} />
        </View>
        <TouchableOpacity onPress={logout}>
          <View style={styles.wrapper}>
            <ImageAtom
              source={logout_icon}
              alt="logoutIcon"
              imageStyle={styles.logoutIcon}
            />
            <TextAtom title="Logout" textStyle={styles.logoutText} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },

  profileImgContainer: {
    marginLeft: 8,
    height: 150,
    width: 150,
    borderRadius: 40,
    marginLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },

  emailText: {
    color: colors.black,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
  },

  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 8,
  },

  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 200 / 2,
    borderColor: 'black',
    borderWidth: 1,
  },

  logoutIcon: {
    height: 30,
    width: 30,
  },

  textContainer: {
    margin: 10,
    marginTop: 0,
    borderBottomWidth: 1,
  },
});

export default CustomDrawer;
