import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {Button} from 'native-base';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import CodeInput from 'react-native-confirmation-code-input';


const styles = StyleSheet.create({
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: responsiveScreenWidth(20),
    height: responsiveScreenHeight(10),
    marginHorizontal: 5,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 1.5,
    borderColor: '#FEB500',
    textAlign: 'center',
    color: '#fff',
    textAlignVertical: 'center',
  },
  focusCell: {
    borderColor: '#fe4e00',
  },
});



const ForgetPassword = () => {
  const stCode = String(1234);
  const inputRef = useRef('codeInputRef2');
const onFinishCheckingCode2 = (e)=>{
  console.log(e)
}
//   console.log(value.length);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../../../assets/Image/upshape.png')}
          style={{width: '33%', height: '100%'}}
        />
        <View>
          <Text
            style={{
              color: '#FEB500',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(2.5),
            }}>
            Forget
          </Text>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(2.5),
            }}>
            Password
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 2,
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '85%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <View style={{marginVertical: 40}}>
          <Text
            style={{
              color: '#FEB500',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(2),
            }}>
            Enter code we just sent to
          </Text>
          <Text
            style={{
              color: '#fff',
              marginTop: 15,
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(1.8),
            }}>
            hello@exmple.com
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

        <CodeInput
              ref={inputRef}
              keyboardType="numeric"
              codeLength={4}
              size={70}
              className="border-box"
              activeColor="#FEB500"
              inactiveColor="#FEB500"
              compareWithCode={stCode}
              cellBorderWidth={2}
              autoFocus={false}
              codeInputStyle={{
                fontWeight: '800',
                fontSize: 20,
                color: '#fdfdfdfd',
              }}
              onFulfill={isValid => onFinishCheckingCode2(isValid)}
            />
          {/* <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          /> */}
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}>
            <Button
              size="lg"
              style={{
                width: 120,
                height: 45,
                backgroundColor: '#FEB500',
              }}
              onPress={() => alert('btn')}>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  color: '#000',
                  fontSize: responsiveScreenFontSize(2),
                }}>
                Verify
              </Text>
            </Button>
          </View>
          <View style={{marginTop: 40}}>
            <TouchableOpacity onPress={() => alert('text')}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: responsiveScreenFontSize(2),
                }}>
                Resend code
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View></View>

        <Image
          source={require('../../../assets/Image/downshape.png')}
          style={{width: '33%', height: '100%'}}
        />
      </View>
    </View>
  );
};

export default ForgetPassword;
