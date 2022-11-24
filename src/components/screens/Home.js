import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ImageList from '../atoms/ImageList';
import TextAtom from '../atoms/TextAtom';
import {useSelector, useDispatch} from 'react-redux';
import {PRODUCT_DETAILS} from '../../redux/constant';
import { fonts } from '../../shared/styles/fonts';
import { colors } from '../../shared/styles/colors';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  let data = useSelector(state => state.productData.products);

  const renderItems = products => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.itemsContainer}
        onPress={() => productDetails(products)}>
        <TextAtom textStyle={styles.itemTitle} title={products.item.title} />
        <View style={styles.itemwrapper}>
          <ImageList
            source={products.item.thumbnail}
            imageStyle={styles.itemImage}
          />
          <View style={styles.itemContent}>
            <View style={styles.contentWrapper}>
              <TextAtom
                textStyle={styles.contentHeading}
                title="Brand   :  "></TextAtom>
              <TextAtom title={products.item.brand} textStyle={styles.itemText}> </TextAtom>
            </View>
            <View style={styles.contentWrapper}>
              <TextAtom
                textStyle={styles.contentHeading}
                title="Price    :  "></TextAtom>
              <TextAtom title={products.item.price} textStyle={styles.itemText}> </TextAtom>
            </View>
            <View style={styles.contentWrapper}>
              <TextAtom
                textStyle={styles.contentHeading}
                title="Stock   :  "></TextAtom>
              <TextAtom title={products.item.stock} textStyle={styles.itemText}> </TextAtom>
            </View>
            <View style={styles.contentWrapper}>
              <TextAtom
                textStyle={styles.contentHeading}
                title="Rating  :  "></TextAtom>
              <TextAtom title={products.item.rating} textStyle={styles.itemText}> </TextAtom>
            </View>
            <View style={styles.contentWrapper}>
              <TextAtom
                textStyle={styles.contentHeading}
                title="Category: "></TextAtom>
              <TextAtom title={products.item.category} textStyle={styles.itemText}> </TextAtom>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const productDetails = products => {
    dispatch({
      type: PRODUCT_DETAILS,
      payload: products,
    });
    navigation.navigate('ProductDetails');
  };

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItems} />
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    margin: 12,
  },

  itemsContainer: {
    marginVertical: 10,
    backgroundColor: colors.lightgrey,
  },

  itemTitle: {
    fontFamily: fonts.RobotoBold,
    fontWeight: 'bold',
    fontSize: 28,
    color: colors.black,
    marginTop: 20,
    marginLeft: 22,
  },

  itemwrapper: {
    display: 'flex',
    flexDirection: 'row',
  },

  itemImage: {
    margin: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.black,
    borderWidth: 1,
    width: 150,
    height: 150,
    borderRadius: 10,
    resizeMode: 'contain',
  },

  itemContent: {
    justifyContent: 'center',
    width: 100,
    marginBottom: 20,
    marginTop: 20,
  },

  contentWrapper:{
    display: 'flex',
    flexDirection: 'row',
  },

  contentHeading: {
    fontWeight: 'bold',
    fontSize:16
  },

  itemText: {
    fontFamily: fonts.RobotoMedium,
    fontSize: 16,
    fontWeight: '600',
  },
  
});

export default HomeScreen;
