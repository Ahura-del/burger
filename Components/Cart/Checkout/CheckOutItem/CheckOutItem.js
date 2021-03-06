import {Button} from 'native-base';
import React from 'react';
import {View, Text, Image, Animated, TouchableOpacity} from 'react-native';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {useDispatch} from 'react-redux';
import {addCart, decreaseCart, delCart} from '../../../../Redux';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faTrash,
  faStar,
  faMinusCircle,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

library.add(faTrash, faStar, faMinusCircle, faPlusCircle);

const CheckOutItem = props => {
  const dispatch = useDispatch();

  const rightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <View style={{justifyContent: 'center'}}>
        <Button
          style={{height: 60, width: 60, backgroundColor: 'red'}}
          onPress={() => dispatch(delCart(props.data.id))}>
          <Animated.Text style={{transform: [{scale}], height: '100%'}}>
            <FontAwesomeIcon icon={faTrash} size={28} color="#fff" />
          </Animated.Text>
        </Button>
      </View>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={rightActions}>
        <View
          style={{
            width: '90%',
            marginBottom: 10,
            marginTop: 20,
            backgroundColor: '#FEB500',
            flexDirection: 'row',
            position: 'relative',
            justifyContent: 'flex-end',
            height: 120,
            borderRadius: 10,
            marginLeft: 'auto',
            zIndex: 9,
          }}>
          <Image
            source={props.data.pic}
            style={{
              width: responsiveWidth(30),
              height: responsiveHeight(14),
              position: 'absolute',
              top: -25,
              left: -40,
              zIndex: 10,
            }}
          />

          <View
            style={{
              width: '75%',
              height: '100%',
              paddingRight: 10,
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingTop: 5,
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontFamily: 'Poppins',
                        fontSize: 18,
                        paddingBottom: 10,
                        fontFamily: 'Poppins',
                      }}>
                      {props.data.name}
                    </Text>
                  </View>
                  <View>
                    <Text style={{fontFamily: 'Poppins', fontSize: 10}}>
                      1hrs
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                  <FontAwesomeIcon
                    icon={faStar}
                    color="yellow"
                    style={{marginRight: 5, fontSize: 10}}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="yellow"
                    style={{marginRight: 5, fontSize: 10}}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="yellow"
                    style={{marginRight: 5, fontSize: 10}}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="yellow"
                    style={{marginRight: 5, fontSize: 10}}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="yellow"
                    style={{marginRight: 5, fontSize: 10}}
                  />
                </View>
                <Text style={{fontFamily: 'Poppins', fontSize: 10}}>
                  By Navgivan Hotel
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <TouchableOpacity
                      onPress={() => dispatch(decreaseCart(props.data))}>
                      <FontAwesomeIcon
                        icon={faMinusCircle}
                        color="#111"
                        size={20}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginHorizontal: 10}}>
                    <Text style={{color: '#111'}}>{props.data.count}</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => dispatch(addCart(props.data))}>
                      <FontAwesomeIcon
                        icon={faPlusCircle}
                        color="#111"
                        size={20}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={{fontFamily: 'Poppins', fontSize: 18}}>
                  ${props.data.price}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default CheckOutItem;
