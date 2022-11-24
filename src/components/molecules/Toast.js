import React from 'react';
import {View,StyleSheet} from 'react-native';
import TextAtom from '../atoms/TextAtom';
import Button from '../atoms/Button';

const Toast = ({toastMessage, setToastMessage}) => {
  return (
    <View style={styles.container}>
      <TextAtom textStyle={styles.text} title='Item Added Successfully!' />
      <Button
        title="X"
        titleStyle={styles.closebtn}
        toastMessage={toastMessage}
        // onPress={() => setToastMessage(!toastMessage)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#5cb85c',
    width: 340,
    height: 40,
    borderRadius: 10,
    marginBottom: 20,
  },

  text: {
    marginTop: 8,
    marginLeft: 80,
    color: 'white',
    fontSize: 16,
  },

  closebtn: {
    color: 'red',
    fontSize: 20
  }
  
});

export default Toast;
