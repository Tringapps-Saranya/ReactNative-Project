import {View,SectionList, StyleSheet, FlatList } from 'react-native';
import ImageList from '../atoms/ImageList';
import TextAtom from '../atoms/TextAtom';

const sectionData = [
  {
    category: 'Smart Phones',
    horizontal: true,
    data: [
      {
        key: '1',
        title: 'iPhone 9',
        rating: '4.69',
        uri: 'https://dummyjson.com/image/i/products/1/3.jpg',
      },
      {
        key: '2',
        title: 'iPhone X',
        rating: '4.44',
        uri: 'https://dummyjson.com/image/i/products/2/1.jpg',
      },
      {
        key: '3',
        title: 'Samsung Universe 9',
        rating: '4.40',
        uri: 'https://dummyjson.com/image/i/products/3/1.jpg',
      },
      {
        key: '4',
        title: 'Oppo F11',
        rating: '4.40',
        uri: 'https://dummyjson.com/image/i/products/4/1.jpg',
      },
      {
        key: '5',
        title: 'Huawei P30',
        rating: '4.43',
        uri: 'https://dummyjson.com/image/i/products/5/1.jpg',
      },
    ],
  },
  {
    category: 'Laptops',
    horizontal: true,
    data: [
      {
        key: '1',
        title: 'MacBook Pro',
        rating: '4.48',
        uri: 'https://dummyjson.com/image/i/products/6/2.jpg',
      },
      {
        key: '2',
        title: 'Samsung Galaxy Book',
        rating: '4.44',
        uri: 'https://dummyjson.com/image/i/products/7/2.jpg',
      },
      {
        key: '3',
        title: 'Microsoft Surface Laptop 4',
        rating: '4.45',
        uri: 'https://dummyjson.com/image/i/products/8/1.jpg',
      },
      {
        key: '4',
        title: 'Infinix INBOOK',
        rating: '4.46',
        uri: 'https://dummyjson.com/image/i/products/9/1.jpg',
      },
      {
        key: '5',
        title: 'HP Pavilion 15-DK1056WM',
        rating: '4.46',
        uri: 'https://dummyjson.com/image/i/products/10/1.jpg',
      },
    ],
  },
  {
    category: 'Cosmetics',
    horizontal: true,
    data: [
      {
        key: '1',
        title: 'perfume Oil',
        rating: '4.26',
        uri: 'https://dummyjson.com/image/i/products/11/1.jpg',
      },
      {
        key: '2',
        title: 'Brown Perfume',
        rating: '4',
        uri: 'https://dummyjson.com/image/i/products/12/1.jpg',
      },
      {
        key: '3',
        title: 'Fog Scent Xpressio',
        rating: '4.23',
        uri: 'https://dummyjson.com/image/i/products/13/1.jpg',
      },
      {
        key: '4',
        title: 'Hyaluronic Acid Serum',
        rating: '4.29',
        uri: 'https://dummyjson.com/image/i/products/14/1.jpg',
      },
      {
        key: '5',
        title: 'Tree Oil 30ml',
        rating: '4.24',
        uri: 'https://dummyjson.com/image/i/products/17/1.jpg',
      },
    ],
  },
];

const ProductList = () => {

  const ListItem = ({item}) => {
    return (
      <View style={styles.container}>
          <ImageList
            source={item.uri}
            imageStyle={styles.images}
          />
         <View style={styles.contentWrapper}>
          <TextAtom
            textStyle={styles.contentHeading}
            title="Model    :  "></TextAtom>
          <TextAtom title={item.title} textStyle={styles.itemText}>
          </TextAtom>
        </View>
        <View style={styles.contentWrapper}>
          <TextAtom
            textStyle={styles.contentHeading}
            title="Rating    :  "></TextAtom>
          <TextAtom title={item.rating} textStyle={styles.itemText}>
          </TextAtom>
        </View>
      </View>
    );
  };
 
  return (
    <View>
      <View>
        <SectionList
          sections={sectionData}
          renderSectionHeader={({section}) => (
            <>
              <TextAtom textStyle={styles.title} title={section.category}/>
              {section.horizontal ? (
                <FlatList
                  contentContainerStyle={{paddingVertical: 10}}
                  horizontal
                  data={section.data}
                  renderItem={({item}) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({item, section}) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </View>
    </View>
  );


};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    margin: 5,
  },

  images: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 5
  },

  title: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    margin: 12
  },

  itemText : {
    fontSize: 16,
    margin: 5
  },

  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },

  contentHeading: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductList;
