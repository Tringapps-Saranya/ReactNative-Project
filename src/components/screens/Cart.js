import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ImageList from '../atoms/ImageList';
import TextAtom from '../atoms/TextAtom';
import {fonts} from '../../shared/styles/fonts';
import {colors} from '../../shared/styles/colors';
import {useSelector} from 'react-redux';

const CartScreen = () => {
  let cartData = useSelector(state => state.cartData.cartData);
  
  const renderItems = cartData => {
    return (
      <View style={styles.itemsContainer}>
        <View style={styles.itemwrapper}>
          <ImageList
            source={cartData.item.item.thumbnail}
            imageStyle={styles.itemImage}
          />
          <TextAtom
            textStyle={styles.itemTitle}
            title={cartData.item.item.title}
          />
          <View style={styles.itemContent}>
            <View style={styles.contentWrapper}>
              <TextAtom
                textStyle={styles.contentHeading}
                title="Brand   :  "></TextAtom>
              <TextAtom
                title={cartData.item.item.brand}
                textStyle={styles.itemText}></TextAtom>
            </View>
            <View style={styles.contentWrapper}>
              <TextAtom
                textStyle={styles.contentHeading}
                title="Price    :  "></TextAtom>
              <TextAtom
                title={cartData.item.item.price}
                textStyle={styles.itemText}></TextAtom>
            </View>
            <View style={styles.contentWrapper}>
              <TextAtom
                textStyle={styles.contentHeading}
                title="Category: "></TextAtom>
              <TextAtom
                title={cartData.item.item.category}
                textStyle={styles.itemText}></TextAtom>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      {cartData.length == 0 ? (
        <Text style={styles.text}>No items are added to the cart</Text>        
      ) : (
        <FlatList data={cartData} renderItem={renderItems} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({

  itemsContainer: {
    margin: 10,
    backgroundColor: colors.lightgrey,
  },

  itemwrapper: {
    display: 'flex',
    flexDirection: 'column',
  },

  itemTitle: {
    fontFamily: fonts.RobotoBold,
    fontWeight: 'bold',
    fontSize: 25,
    color: colors.black,
    marginLeft: 22,
  },

  itemImage: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.black,
    borderWidth: 1,
    alignItems: 'center',
    width: 350,
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain',
  },

  itemContent: {
    justifyContent: 'center',
    width: 180,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 22,
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.RobotoMedium,
    fontWeight: 'bold',
    color:'black'
  },

  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },

  contentHeading: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  itemText: {
    fontFamily: fonts.RobotoMedium,
    fontSize: 16,
    fontWeight: '600',
  },

});
export default CartScreen;
