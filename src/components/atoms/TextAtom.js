import { View, Text } from "react-native";

const TextAtom = (props) => {
    const { textStyle, title } = props;
    return (
        <View>
            <Text style={textStyle}>{title}</Text>
        </View>
    )
}
export default TextAtom;
