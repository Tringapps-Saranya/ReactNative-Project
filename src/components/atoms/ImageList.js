import {Image} from 'react-native';

const ImageList = props => {
  const {source, imageStyle} = props;

  return (
    <Image source={{uri: source}} style={imageStyle} />
  );
  
};
export default ImageList;
