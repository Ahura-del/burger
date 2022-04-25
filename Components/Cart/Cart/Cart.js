import {Button} from 'native-base';
import React, {Fragment} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faShoppingCart,
  faThLarge,
  faHome,
  faPlus,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import {

  responsiveFontSize
} from 'react-native-responsive-dimensions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import CartItem from './CartItem/CartItem';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Badge} from 'react-native-elements';
// import {useSelector} from 'react-redux';
// import {Badge} from '@rneui/themed';
// import {delNotify} from '../../../Redux';
library.add(faUser, faShoppingCart, faThLarge, faHome, faBell,faPlus);

const Cart = () => {
  const navigation = useNavigation();
  // const cartState = "";
  const stateCart = useSelector(state => state.cartState.cart)
  //   const notifySate = useSelector(state => state.notify.notify);
  //   const checkNotify = 'title' in notifySate;
  //   const BadgeIconNotify = withBadge()(Icon);
  return (
    <Fragment>
      {stateCart.length !== 0 ? (
        <ScrollView style={{backgroundColor: '#000'}}>
          <View
            style={{
              width: '95%',
              backgroundColor: '#000',
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 30,
              }}>
              <Text
                style={{fontFamily: 'Poppins', fontSize: 24, color: '#FEB500'}}>
                Burgers
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                

                {/* {checkNotify ? (
                  <TouchableOpacity
                    style={{width: 30, height: 30}}
                    onPress={() => {
                      navigation.navigate('notify', {
                        title: notifySate.title,
                        desc: notifySate.body,
                        img: notifySate.android.imageUrl,
                      });
                      dispatch(delNotify());
                    }}>
                        <Text>hi</Text>
                    {/* <BadgeIconNotify
                      type="FontAwesome"
                      name="bell"
                      style={{fontSize: 20, color: 'red'}}
                    /> 
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{width: 30, height: 30}}
                    onPress={() => navigation.navigate('notify')}>
                    <Icon
                      type="FontAwesome5"
                      name="bell"
                      style={{fontSize: 20, color: '#FEB500'}}
                    />
                  </TouchableOpacity>
                )} */}
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Notification')}>
                    <FontAwesomeIcon icon={faBell} color="#333" size={22} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{marginTop: 40, marginLeft: 'auto'}}>
              {stateCart.map(item => (
                <CartItem
                  key={item.id}
                  pic={item.pic}
                  name={item.name}
                  id={item.id}
                  price={item.price}
                  count={item.count}
                />
              ))}
            </View>

            <View
              style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
              <Button
                size="lg" style={{backgroundColor:'#FEB500'}} 
                onPress={() => {
                  navigation.navigate('Checkout');
                }}>
                <Text style={{color:"#000", fontFamily: 'Poppins', textAlign:"center" , fontSize: responsiveFontSize(2)}}>Check Out</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={{backgroundColor: '#000', flex: 1}}>
          <View
            style={{
              backgroundColor: '#000',
              width: '90%',
              justifyContent: 'center',
              marginRight: 'auto',
              marginLeft: 'auto',
              alignItems: 'center',
              flex: 1,
              
            }}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('SubCategory')}
              style={{
                width: '100%',
                backgroundColor: '#000',
                height: '50%',
                justifyContent: 'center',
                borderStyle: 'dashed',
                borderWidth: 3,
                borderColor: '#FEB500',
                borderRadius: 20,
                
              }}>
                <View 
                
                >

              <Text
                style={{
                  textAlign: 'center',
                  paddingBottom: 20,
                  color: '#FEB500',
                  fontSize: 20,
                
                }}>
                Add Food ...
              </Text>
            
                <Text  style={{textAlign:"center"}}>

              <FontAwesomeIcon icon={faPlus} color="#FEB500" size={50} />
                </Text>
             
                  </View>
              {/* <Icon
                type="FontAwesome5"
                name="plus"
                style={{textAlign: 'center', color: '#FEB500', fontSize: 60}}
              /> */}
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View style={{backgroundColor: '#FEB500', width: '100%'}}>
        <View
          style={{
            width: '100%',
            paddingVertical: 5,
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            // paddingTop: 12,
            // paddingBottom: 12,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <FontAwesomeIcon icon={faHome} color="#000" size={26} />
          </TouchableOpacity>
          {/* <Icon
            type="FontAwesome5"
            name="home"
            style={{
              fontSize: 20,
              padding: 8,
              borderRadius: 10,
              color: '#000',
            }}
            onPress={() => {
              navigation.navigate('home');
            }}
          /> */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Category');
            }}>
            <FontAwesomeIcon icon={faThLarge} color="#000" size={26} />
          </TouchableOpacity>
          {/* <Icon
            type="FontAwesome5"
            name="th-large"
            style={{
              padding: 8,
              fontSize: 20,
              borderRadius: 10,
              color: '#000',
            }}
            onPress={() => {
              navigation.navigate('category');
            }}
          /> */}

          {/* {cartState.length !== 0 ? (
            <BadgeIcon
              type="FontAwesome5"
              name="shopping-cart"
              style={{
                padding: 8,
                fontSize: 20,
                borderRadius: 10,
                color: '#FEB500',
                backgroundColor: '#000',
              }}
              onPress={() => navigation.navigate('cart')}
            />
            ) : (*/}

{stateCart.length !== 0 ? (
             <TouchableOpacity style={{padding: 10,

              fontSize: 20,
              borderRadius: 10,
              backgroundColor: '#000',}} onPress={() => navigation.navigate('Cart')}> 
             
        <Badge value={stateCart.length} status='error' containerStyle={{ position: 'absolute', top: -5, left: 40 }} />
        <FontAwesomeIcon icon={faShoppingCart} color="#FEB500" size={26} />
            </TouchableOpacity>
            ) : ( 
            <TouchableOpacity
            style={{padding: 10,

              fontSize: 20,
              borderRadius: 10,
              backgroundColor: '#000',}}
              onPress={() => {
                navigation.navigate('Cart');
              }}>
              <FontAwesomeIcon icon={faShoppingCart} color="#FEB500" size={26} />

            
            </TouchableOpacity>
            )} 
          {/* <Icon
              type="FontAwesome5"
              name="shopping-cart"
              style={{
                padding: 8,
                fontSize: 20,
                borderRadius: 10,
                color: '#FEB500',
                backgroundColor: '#000',
              }}
              onPress={() => {
                navigation.navigate('cart');
              }}
            />
          )}  */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <FontAwesomeIcon icon={faUser} color="#000" size={26} />
          </TouchableOpacity>
          {/* <Icon
            type="FontAwesome"
            name="user"
            style={{
              padding: 8,
              fontSize: 20,
              borderRadius: 10,
              color: '#000',
            }}
           
          /> */}
        </View>
      </View>
    </Fragment>
  );
};

export default Cart;
