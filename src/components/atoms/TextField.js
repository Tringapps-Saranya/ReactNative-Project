import { StyleSheet, TextInput } from "react-native";
import { fonts } from "../../shared/styles/fonts";

const TextField = (props) => {
    const { placeholder, textBoxStyle , onChangeText} = props
    return (
        <TextInput placeholder={placeholder} onChangeText={onChangeText}
            style={[styles.textBoxText, textBoxStyle]}
        />
    )
}
export default TextField;

const styles = StyleSheet.create({

    textBoxText: {
        fontSize: 17,
        fontFamily: fonts.RobotoMedium,
    }
})