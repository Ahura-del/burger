import {Button, Toast} from 'native-base';
import React, {Fragment} from 'react';
import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import CheckOutAddress from './CheckOutAddress/CheckOutAddress';
import CheckOutItem from './CheckOutItem/CheckOutItem';
import CheckOutPayment from './CheckOutPayment/CheckOutPayment';
import OrderList from './OrderList/OrderList';
import {useDispatch, useSelector} from 'react-redux';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faShoppingCart,
  faThLarge,
  faHome,
  faHamburger,
  faPlus,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

library.add(
  faPlus,
  faBell,
  faHamburger,
  faUser,
  faShoppingCart,
  faThLarge,
  faHome,
  faHamburger,
  faPlus,
  faBell,
);
import {useNavigation} from '@react-navigation/native';
import { delAllCart } from '../../../Redux';

const Checkout = () => {
  const navigation = useNavigation();
  const list = useSelector(state => state.cartState.cart);
  const dispatch = useDispatch()
  function sumPrice(input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
      total += parseInt(input[i].price * input[i].count);
    }
    return total;
  }

  //   const request = {
  //     merchant_id: 'f042801a-f79d-11e6-8df1-005056a205be',
  //     amount: 1000,
  //     description: 'hi',
  //     callback_url: 'http://redreseller.com/verify',
  //   };

  const payBtn = () => {
    Toast.show({
      title: 'Your payment was successful',
      duration: 3000,
      bg: 'green.600',
      placement: 'bottom',
      variant: 'solid',
    });
    setTimeout(()=>{
      navigation.navigate('Home')
      dispatch(delAllCart())
    },2000)
  };

  return (
    <Fragment>
      <FlatList
        style={{backgroundColor: '#000'}}
        ListHeaderComponent={
          <>
            <View
              style={{
                width: '95%',
                marginLeft: 'auto',
                padding: 10,
                marginRight: 'auto',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 30,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: 18,
                    color: '#FEB500',
                  }}>
                  Check out
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
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
                      <BadgeIconNotify
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

              {list.length != 0 ? (
                <View
                  style={{
                    marginTop: 30,
                    width: '100%',
                    position: 'relative',
                    zIndex: 8,
                  }}>
                  <FlatList
                    data={list}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (<CheckOutItem data={item} />)}
                  />
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => navigation.navigate('SubCategory')}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderStyle: 'dashed',
                      borderWidth: 3,
                      borderRadius: 10,
                      borderColor: '#FEB500',
                      paddingTop: 20,
                      paddingBottom: 20,
                      marginTop: 25,
                    }}>
                    <Text
                      style={{
                        color: '#FEB500',
                        fontSize: 20,
                        paddingBottom: 10,
                      }}>
                      Add Meal ...
                    </Text>
                    <FontAwesomeIcon icon={faPlus} color="#FEB500" />
                    {/* <Icon
                      type="FontAwesome5"
                      name="plus"
                      style={{color: '#FEB500'}}
                    /> */}
                  </View>
                </TouchableOpacity>
              )}
            </View>
            <View style={{marginTop: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '95%',
                  marginLeft: 'auto',
                  padding: 10,
                  marginRight: 'auto',
                }}>
                <Text style={{fontFamily: 'Poppins', color: '#FEB500'}}>
                  Shipping Address
                </Text>
                <Text style={{fontFamily: 'Poppins', color: '#fff'}}>
                  Add New
                </Text>
              </View>

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <CheckOutAddress />

                <CheckOutAddress />

                <CheckOutAddress />

                <CheckOutAddress />
              </ScrollView>
            </View>
            <View style={{marginTop: 30, marginBottom: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '95%',
                  marginLeft: 'auto',
                  padding: 10,
                  marginRight: 'auto',
                  marginBottom: 20,
                }}>
                <Text style={{fontFamily: 'Poppins', color: '#FEB500'}}>
                  Payment Method
                </Text>
                <Text style={{fontFamily: 'Poppins', color: '#fff'}}>
                  Add New
                </Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <CheckOutPayment color1="#FEB500" />
                <CheckOutPayment color1="white" />
              </ScrollView>
            </View>
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: '#FEB500',
                marginVertical: 30,
              }}></View>
            <View style={{flexDirection: 'column'}}>
              {list.length !== 0 ? (
                <View>
                  {list.map(item => (
                    <OrderList
                      name={item.name}
                      price={item.price}
                      count={item.count}
                      key={item.id}
                    />
                  ))}
                </View>
              ) : (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 15,
                  }}>
                  <FontAwesomeIcon icon={faHamburger} color="#FEB500" />
                  {/* <Icon
                    type="FontAwesome5"
                    name="hamburger"
                    style={{color: '#FEB500'}}
                  /> */}
                  <Text
                    style={{
                      color: '#FEB500',
                      fontSize: 18,
                      textAlign: 'center',
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}>
                    Empty !
                  </Text>
                </View>
              )}
            </View>
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: '#FEB500',
                marginBottom: 30,
              }}></View>
            <View
              style={{
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}>
              <Text style={{fontFamily: 'Poppins', color: '#FEB500'}}>
                Total
              </Text>

              <Text style={{fontFamily: 'Poppins', color: '#FEB500'}}>
                ${sumPrice(list)}
              </Text>
            </View>

            <View
              style={{
                width: '70%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginVertical: 50,
              }}>
              {list.length != 0 ? (
                <Button
                  size="lg"
                  style={{backgroundColor: '#FEB500'}}
                  onPress={payBtn}>
                  <Text
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: 16,
                      fontWeight: '200',
                    }}>
                    Place Order
                  </Text>
                </Button>
              ) : (
                <Button  style={{backgroundColor: '#ccc'}} isDisabled>
                  <Text
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: 16,
                      fontWeight: '200',
                      color: '#fdfdfd'
                    }}>
                    Place Order
                  </Text>
                </Button>
              )}
            </View>
          </>
        }
      />

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
            }}>
            <FontAwesomeIcon icon={faThLarge} color="#000" size={26} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 10,
              fontSize: 20,
              borderRadius: 10,
              backgroundColor: '#000',
            }}
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <FontAwesomeIcon icon={faShoppingCart} color="#FEB500" size={26} />
          </TouchableOpacity>

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

export default Checkout;
