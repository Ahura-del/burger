import React, { useState,Fragment, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faUser , faShoppingCart , faThLarge, faHome, faHeart, faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
    responsiveScreenFontSize,

  } from 'react-native-responsive-dimensions';
import PopularMeal from './PopularMeal/PopularMeal';
import { useNavigation } from '@react-navigation/native'
import {useDispatch} from 'react-redux';
// import {addCart, addNotify, delNotify, fetchUser } from '../../Redux';
// import {withBadge} from 'react-native-elements';
// import messaging from '@react-native-firebase/messaging';
// import AsyncStorage from '@react-native-community/async-storage';
// import {useNetInfo} from "@react-native-community/netinfo";
// import Connection from '../Connection/Connection';


// import Connection from '../Connection/Connection';
// import axios from 'axios';

const data =[
  {
      "id":1,
      "name":"Chicken Burger",
      "image":require('../../assets/Image/burger3.png'),
      "info":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, natus.",
      "price":35
  },
  {
      "id":2,
      "name":"Veggie Burger",
      "image":require('../../assets/Image/burger2.png'),
      "info":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, natus.",
      "price":25
  },
  {
      "id":3,
      "name":"Veg Burger",
      "image":require('../../assets/Image/OGMOK20.png'),
      "info":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, natus.",
      "price":25
  },
  {
      "id":4,
      "name":"French Fries",
      "image":require('../../assets/Image/french.png'),
      "info":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, natus.",
      "price":15
  },
]


library.add(faUser,faShoppingCart,faThLarge,faHome,faHeart,faBell )








const Home =  () => {
  const dispatch = useDispatch();

// const {products} = useSelector(state => state.productState)
const [product , setProduct] = useState([])
const navigation = useNavigation()

useEffect(()=>{
  const spliceProducts = data.splice(0,2)
  setProduct(spliceProducts)
},[])



  return (
    <Fragment>
    <View style={{flex: 1, flexDirection: 'column'}}>
    <View style={{flex: 2, flexDirection: 'column', position: 'relative'}}>
      <Image
        source={require('../../assets/Image/welcome2.png')}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}
      />
      <View
        style={{
          // height:"100%",
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 3,
          marginTop: 20,
        }}>
        <View
          style={{
            display:"flex",
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems:"center"
          }}>
          <View>
            {/* <H2 style={{marginBottom: 10}}>Explore</H2> */}
            <Text style={{
              fontFamily: 'Poppins',fontWeight:"600" , color:"#000",fontSize: responsiveScreenFontSize(2.7)}}>
              What would you like to eat?
            </Text>
          </View>
          <View style={{
            alignItems:"center",
    
            flexDirection: 'row'}}
            >
          
            <View >
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}>
                  <FontAwesomeIcon icon={faBell} color='#333' size={22} />
              </TouchableOpacity>
          
          </View>
              </View>
        </View>
      </View>
    </View>
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View
        style={{
          position: 'absolute',
          top: -85,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          width: '100%',
          height: '50%',
          backgroundColor: '#000',
        }}>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
    
            justifyContent: 'space-between',
            width: '85%',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}>
          <Text
            style={{color: '#FEB500', fontFamily: 'Poppins', fontSize: responsiveScreenFontSize(1.7)}}
            
            >
            Popular Today
          </Text>
    
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SubCategory');
            }}>
            <Text
              style={{color: '#fff', fontFamily: 'Poppins', fontSize: responsiveScreenFontSize(1.7)}}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    
      <View
        style={{
          height: '100%',
          backgroundColor: '#000',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '85%',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}>
        {product.map(item => (
          <PopularMeal
            key={item.id}
            Image={item.image}
            name={item.name}
            desc={item.info}
            price={item.price}
            mealDitail={() => {
              navigation.navigate('MealDetail', {
                item,
              });
            }}
            shopMeal={() => {
              dispatch(addCart(item));
            }}
          />
        ))}
      </View>
    </View>
    
    <View style={{backgroundColor: '#FEB500', width: '100%'}}>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-around',
          flexDirection: 'row',
          paddingVertical:5,
          alignItems:"center",
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{
            padding: 10,
            
            fontSize: 20,
            borderRadius: 10,
            // color: '#FEB500',
            backgroundColor: '#000',
          }}
          >
                   <FontAwesomeIcon icon={faHome} color='#FEB500' size={26} />
                   </TouchableOpacity>
    
          {/* <Icon
            type="FontAwesome5"
            name="home"
            style={{
              backgroundColor: '#000',
              fontSize: 20,
              padding: 8,
              borderRadius: 10,
              color: '#FEB500',
            }}
          /> */}
    
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Category');
          }}>
         <FontAwesomeIcon icon={faThLarge} color='black' size={26} />
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
          /> */}
    
        {/* {stateCart.length !== 0 ? ( */}
          {/* <TouchableOpacity onPress={() => navigation.navigate('cart')}> */}
            {/* <BadgeIcon
              type="FontAwesome5"
              name="shopping-cart"
              style={{
                  padding: 8,
                fontSize: 20,
                borderRadius: 10,
                color: '#000',
            }}
        /> */}
          {/* </TouchableOpacity> */}
        {/* ) : ( */}
          <TouchableOpacity
            onPress={() => {
                navigation.navigate('cart');
            }}>
                        <FontAwesomeIcon icon={faShoppingCart} color='black' size={26} />
    
            {/* <Icon
              type="FontAwesome5"
              name="shopping-cart"
              style={{
                  padding: 8,
                  fontSize: 20,
                  borderRadius: 10,
                color: '#000',
            }}
            /> */}
            </TouchableOpacity>
        {/* )} */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('profile');
        }}>
            <FontAwesomeIcon icon={faUser} color='black' size={26} />
          {/* <Icon
          
            as={FontAwesome}
            name="user"
            style={{
                  padding: 8,
              fontSize: 20,
              borderRadius: 10,
              color: '#000',
            }}
          /> */}
        </TouchableOpacity>
      </View>
    </View>
    </View>
     
    </Fragment>
  );
};

export default Home;
