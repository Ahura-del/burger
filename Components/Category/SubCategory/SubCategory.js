import {Heading} from 'native-base';
import React, {useEffect, useState} from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import ItemSubCategory from './ItemSubCat';
import {useDispatch, useSelector} from 'react-redux';
// import {withBadge} from 'react-native-elements';
import {addCart, delNotify} from '../../../Redux';
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



const products =[
    {
        "id":1,
        "name":"Chicken Burger",
        "image":require('../../../assets/Image/burger3.png'),
        "info":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, natus.",
        "price":35
    },
    {
        "id":2,
        "name":"Veggie Burger",
        "image":require('../../../assets/Image/burger2.png'),
        "info":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, natus.",
        "price":25
    },
    {
        "id":3,
        "name":"Veg Burger",
        "image":require('../../../assets/Image/OGMOK20.png'),
        "info":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, natus.",
        "price":25
    },
    {
        "id":4,
        "name":"French Fries",
        "image":require('../../../assets/Image/french.png'),
        "info":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, natus.",
        "price":15
    },
  ]



library.add(faShoppingCart, faBell, faHome, faThLarge, faUser);

const SubCategory = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  

  //   const notifySate = useSelector(state => state.notify.notify);
  //   const checkNotify = 'title' in notifySate;

  //   const BadgeIconNotify = withBadge()(Icon);

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1, flexDirection: 'column', position: 'relative'}}>
        <Image
          source={require('../../../assets/Image/burger.png')}
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
        />
        <View
          style={{
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 3,
            marginTop: 20,
          }}>
          <View
            style={{
              width: '85%',
              flexDirection: 'row',
              marginRight: 'auto',
              marginLeft: 'auto',
              justifyContent: 'space-between',
            }}>
            <View>
              <Heading size="md" style={{marginBottom: 10}}>
                Burgers
              </Heading>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}>
                <FontAwesomeIcon icon={faBell} color="#333" size={22} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={{flex: 1.5, backgroundColor: '#fff'}}>
        <View
          style={{
            backgroundColor: '#000',
            height: '100%',
            position: 'relative',
            zIndex: 6,
          }}>
          <View
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#000',
              position: 'absolute',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              top: -13,
            }}></View>
          <View
            style={{
              height: '100%',
              backgroundColor: '#000',
              width: '95%',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}>
            <ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  zIndex: 13,
                  alignContent: 'space-between',
                  flexWrap: 'wrap',
                  height: '100%',
                  width: '100%',
                  marginVertical: 30,
                  paddingBottom: 60,
                  paddingHorizontal: 8,
                }}>
                {products.map(item => (
                  <ItemSubCategory
                    pic={item.image}
                    name={item.name}
                    desc={item.info}
                    price={item.price}
                    key={item.id}
                    mealDitail={() => {
                        navigation.navigate('MealDetail', {
                          item,
                        });
                      }}
                    shopMeal={() => {
                      // navigation.navigate('cart');
                      dispatch(addCart(item));
                    }}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>

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

          {/* {stateCart.length !== 0 ? (
            <BadgeIcon
              type="FontAwesome5"
              name="shopping-cart"
              style={{
                padding: 8,
                fontSize: 20,
                borderRadius: 10,
                color: '#000',
              }}
              onPress={() => navigation.navigate('cart')}
            />
          ) : (
            <Icon
              type="FontAwesome5"
              name="shopping-cart"
              style={{
                padding: 8,
                fontSize: 20,
                borderRadius: 10,
                color: '#000',
              }}
              onPress={() => {
                navigation.navigate('cart');
              }}
            />
          )} */}

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('cart');
            }}>
            <FontAwesomeIcon icon={faShoppingCart} color="#000" size={26} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('profile');
            }}>
            <FontAwesomeIcon icon={faUser} color="#000" size={26} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SubCategory;
