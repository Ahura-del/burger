// import {Icon} from 'native-base';
import React, {Fragment} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import GroupCategory from './GroupCategory';
import {Badge} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faShoppingCart,
  faBell,
  faHome,
  faThLarge,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
library.add(faShoppingCart, faBell, faHome, faThLarge, faUser);

const data = [
  {id: 1, name: 'Burgers', image: require('../../assets/Image/OGMOK20.png')},
  {
    id: 2,
    name: 'Meals',
    image: require('../../assets/Image/bbq-beef-burger-w-egg.png'),
  },
  {
    id: 3,
    name: 'Rice Bowls',
    image: require('../../assets/Image/Subtraction.png'),
  },
  {
    id: 4,
    name: 'Beverages',
    image: require('../../assets/Image/131026_preview.png'),
  },
  {id: 5, name: 'Sides', image: require('../../assets/Image/french.png')},
  {
    id: 6,
    name: 'Desserts',
    image: require('../../assets/Image/PngItem_2678600.png'),
  },
];

const Category = () => {
  const navigation = useNavigation();
  const stateCart = useSelector(state => state.cartState.cart);
  return (
    <Fragment>
      <ScrollView style={{backgroundColor: '#000', marginBottom: 0}}>
        <View
          style={{
            width: '90%',
            marginRight: 'auto',
            marginLeft: 'auto',
            height: '100%',
            paddingBottom: 60,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text
              style={{fontFamily: 'Poppins', fontSize: 18, color: '#FEB500'}}>
              Category
            </Text>

            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}>
                <FontAwesomeIcon icon={faBell} color="#333" size={22} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',

                alignContent: 'space-between',
                flexWrap: 'wrap',
                height: '100%',
                width: '100%',

                marginVertical: 30,
                paddingBottom: 110,
              }}>
              {data.map(item => (
                <GroupCategory
                  name={item.name}
                  pic={item.image}
                  key={item.id}
                  itemFunc={() => {
                    navigation.navigate('SubCategory');
                  }}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{backgroundColor: '#FEB500', width: '100%'}}>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-around',
            flexDirection: 'row',
            paddingVertical: 5,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <FontAwesomeIcon icon={faHome} color="#000" size={26} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Category');
            }}
            style={{
              padding: 10,

              fontSize: 20,
              borderRadius: 10,
              backgroundColor: '#000',
            }}>
            <FontAwesomeIcon icon={faThLarge} color="#FEB500" size={26} />
          </TouchableOpacity>

          {stateCart.length !== 0 ? (
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Badge
                value={stateCart.length}
                status="error"
                containerStyle={{position: 'absolute', top: -10, left: 25}}
              />
              <FontAwesomeIcon icon={faShoppingCart} color="#000" size={26} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cart');
              }}>
              <FontAwesomeIcon icon={faShoppingCart} color="#000" size={26} />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <FontAwesomeIcon icon={faUser} color="#000" size={26} />
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
};

export default Category;
