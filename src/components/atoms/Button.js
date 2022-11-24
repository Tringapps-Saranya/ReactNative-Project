import React from 'react'
import { TouchableOpacity , StyleSheet, Text} from 'react-native'
import { fonts } from '../../shared/styles/fonts'
import { colors } from '../../shared/styles/colors'

const Button = (props) => {

  const {title,onPress,buttonStyle,titleStyle,toastMessage} = props

  return (
    <TouchableOpacity activeOpacity={0.5} style={[styles.buttonContainer,buttonStyle]} toastMessage={toastMessage} onPress={onPress}>
        <Text style={[styles.buttonTitle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

 buttonContainer: {
    padding: 8,
    border:'none',
    borderRadius: 10,
 },

 buttonTitle:{
    color: colors.white ,
    textAlign: 'center',
    fontFamily: fonts.RobotoMedium,
    fontSize: 20,
    fontWeight:'bold'
 },

});    

export default Button;
