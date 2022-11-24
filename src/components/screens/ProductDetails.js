import {React, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {CART_DATA} from '../../redux/constant';
import ImageList from '../atoms/ImageList';
import Toast from '../molecules/Toast';
import Button from '../atoms/Button';
import {colors} from '../../shared/styles/colors';
import {fonts} from '../../shared/styles/fonts';
import TextAtom from '../atoms/TextAtom';

const ProductDetails = () => {
  const product = useSelector(state => state.productDetails);

  const [toastMessage, setToastMessage] = useState(false);

  const dispatch = useDispatch();

  const cartDetails = product => {
    dispatch({
      type: CART_DATA,
      payload: product,
    });
    setToastMessage(true);
    setTimeout(() => {
      setToastMessage(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      {toastMessage && (
        <Toast
          toastMessage={toastMessage}
          setToastMessage={setToastMessage}
        />
      )}
      <Text style={styles.itemTitle}>{product.item.title}</Text>
      <ImageList
        source={product.item.thumbnail}
        imageStyle={styles.itemImage}
      />
      <View style={styles.itemContent}>
        <View style={styles.contentWrapper}>
          <TextAtom
            textStyle={styles.contentHeading}
            title="Brand   :  "></TextAtom>
          <TextAtom
            title={product.item.brand}
            textStyle={styles.itemText}></TextAtom>
        </View>
        <View style={styles.contentWrapper}>
          <TextAtom
            textStyle={styles.contentHeading}
            title="Price    :  "></TextAtom>
          <TextAtom
            title={product.item.price}
            textStyle={styles.itemText}></TextAtom>
        </View>
        <View style={styles.contentWrapper}>
          <TextAtom
            textStyle={styles.contentHeading}
            title="Stock   :  "></TextAtom>
          <TextAtom
            title={product.item.stock}
            textStyle={styles.itemText}></TextAtom>
        </View>
        <View style={styles.contentWrapper}>
          <TextAtom
            textStyle={styles.contentHeading}
            title="Rating  :  "></TextAtom>
          <TextAtom
            title={product.item.rating}
            textStyle={styles.itemText}></TextAtom>
        </View>
        <View style={styles.contentWrapper}>
          <TextAtom
            textStyle={styles.contentHeading}
            title="Category: "></TextAtom>
          <TextAtom
            title={product.item.category}
            textStyle={styles.itemText}></TextAtom>
        </View>
        <View style={styles.contentWrapper}>
          <TextAtom
            textStyle={styles.contentHeading}
            title="Description: "></TextAtom>
          <TextAtom
            title={product.item.description}
            textStyle={styles.itemText}></TextAtom>
        </View>
        <Button
          title="Add to cart"
          onPress={() => cartDetails(product)}
          buttonStyle={styles.cartbtn}
          toastMessage={toastMessage}
        />
      </View>
    </View>
  );
};
export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },

  itemImage: {
    width: 340,
    height: 250,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
  },

  itemTitle: {
    fontFamily: fonts.RobotoBold,
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },

  itemText: {
    fontFamily: fonts.RobotoMedium,
    fontSize: 16,
    fontWeight: '600',
  },

  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },

  itemContent: {
    width: 250,
  },

  contentHeading: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  cartbtn: {
    marginTop: 40,
    backgroundColor: colors.darkgrey,
    width: 340,
  },
});
