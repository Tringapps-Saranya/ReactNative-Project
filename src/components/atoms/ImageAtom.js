import { Image } from "react-native";

const ImageAtom = (props) => {

    const { source, imageStyle } = props;
    return (
        <Image source={source} style={imageStyle} />
    )
}

export default ImageAtom;