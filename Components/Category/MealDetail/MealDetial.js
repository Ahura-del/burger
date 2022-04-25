import {Button, Heading, Toast} from 'native-base';
import {Avatar} from 'react-native-elements';
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useDispatch} from 'react-redux';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faShoppingCart, faBell} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import person1 from '../../../assets/Image/persion1.png';
import person2 from '../../../assets/Image/persion2.png';
import person3 from '../../../assets/Image/persion3.png';
import {useNavigation, useRoute} from '@react-navigation/native';
import { addCart } from '../../../Redux';

const data = [
  {
    image: person1,
    name: 'John Dow',
    text: 'Yammy',
  },
  {
    image: person2,
    name: 'Micra Solutoin',
    text: 'Yammy.......Great',
  },
  {
    image: person3,
    name: 'Max Anderson',
    text: 'Wonderful',
  },
];

library.add(faShoppingCart, faBell);

const MealDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch()
  const [text, setText] = useState('');

  const saveBtn = () => {
    if (text === '') {
      Toast.show({
        title: 'Please enter your comment',
        bg: 'red.600',
        placement: 'bottom',
        duration: 3000,
        variant: 'solid',
      });
      return;
    }
    Toast.show({
      title: 'Your comment was sent',
      bg: 'green.600',
      placement: 'bottom',
      duration: 3000,
      variant: 'solid',
    });
    setText('');
  };
  return (
    <ScrollView style={{backgroundColor: '#000'}}>
      <View
        style={{
          width: '95%',
          padding: 10,
          backgroundColor: '#000',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            marginBottom: 100,
            alignItems: 'center',
          }}>
          <Heading size="md" style={{color: '#FEB500'}}>
            Burgers
          </Heading>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}>
              <FontAwesomeIcon icon={faBell} color="#333" size={22} />
            </TouchableOpacity>
          </View>
          {/* </View> */}
        </View>

        <View
          style={{
            backgroundColor: '#FEB500',
            width: '90%',
            height: 350,
            position: 'relative',
            zIndex: 10,
            borderRadius: 10,
          }}>
          <Image
            source={route.params.item.pic}
            resizeMode="cover"
            style={{
              width: responsiveWidth(60),
              height: responsiveHeight(35),
              position: 'absolute',
              top: -95,
              right: -40,
              zIndex: 5,
            }}
          />

          <View style={{marginTop: 170, paddingLeft: 10, paddingRight: 60}}>
            <Heading size="md" style={{fontSize: 26}}>
              {route.params.item.name}
            </Heading>
            <Text
              style={{
                fontSize: responsiveFontSize(1.9),
                fontWeight: '400',
                marginVertical: 20,
              }}>
              {route.params.item.info}
            </Text>

            <Heading
              size="lg"
              style={{
                marginTop: 10,
                fontSize: responsiveFontSize(3.5),
                fontWeight: '600',
              }}>
              ${route.params.item.price}
            </Heading>
          </View>
          <BoxShadow
            setting={{
              width: 70,
              height: 70,
              color: '#FEB500',
              border: 10,
              radius: 32,
              opacity: 0.5,
              x: 1,
              y: 1,
              style: {
                marginVertical: 5,
                position: 'absolute',
                bottom: -25,
                right: -25,
              },
            }}>
            <TouchableOpacity
            onPress={()=>dispatch(addCart(route.params.item))}
              style={{
                width: 70,
                height: 70,
                backgroundColor: '#000',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesomeIcon
                icon={faShoppingCart}
                color="#FEB500"
                size={24}
              />
            </TouchableOpacity>
          </BoxShadow>
        </View>

        <View style={{marginTop: 30}}>
          {data.map((item, ind) => (
            <View
              key={ind}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Avatar rounded size="medium" source={item.image} />
              <View style={{marginLeft: 10}}>
                <Text style={{color: '#FEB500'}}>{item.name}</Text>
                <Text style={{color: '#7e7e7e'}}>{item.text}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={{marginVertical: 50, padding: 5}}>
          <TextInput
            style={{
              width: '100%',
              height: 110,
              backgroundColor: '#fff',
              borderRadius: 5,
            }}
            multiline={true}
            numberOfLines={1}
            value={text}
            onChangeText={e => setText(e)}
          />
        </View>

        <View style={{width: '70%', marginLeft: 'auto', marginRight: 'auto'}}>
          <Button
            size="lg"
            style={{backgroundColor: '#FEB500'}}
            onPress={saveBtn}>
            <Text
              style={{
                color: '#000',
                fontFamily: 'Poppins',
                textAlign: 'center',
                fontSize: responsiveFontSize(2),
              }}>
              Save
            </Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetail;
