import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Loading = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <ActivityIndicator color="#FEB500" />
    </View>
  );
};

export default Loading;
