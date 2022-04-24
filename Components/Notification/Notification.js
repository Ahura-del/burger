import React, {Fragment} from 'react';
import {Icon} from 'native-base';
import {View, Text, TouchableOpacity} from 'react-native';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
library.add(faArrowLeft);

const Notification = () => {
  const navigation = useNavigation();
  return (
    <Fragment>
      <View style={{backgroundColor: '#000', flex: 1}}>
        <View
          style={{
            backgroundColor: '#000',
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: 20,
            paddingBottom: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} color="#FEB500" size={24} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, backgroundColor: '#000'}}>
          <View
            style={{
              width: '85%',
              marginLeft: 'auto',
              marginRight: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <Icon
              type="FontAwesome5"
              name="envelope"
              style={{fontSize: 100, color: '#FEB500'}}
            />
            <Text
              style={{color: '#FEB500', fontSize: 24, fontFamily: 'Poppins'}}>
              No Message !
            </Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default Notification;
