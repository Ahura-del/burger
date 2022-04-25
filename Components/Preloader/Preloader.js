import React, {useEffect, useRef} from 'react';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from '../Home/Home';
import {DevSettings} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../Redux';

const Preloader = () => {
  const dispatch = useDispatch();
  const {update} = useSelector(state => state.userState);
  const restUser = useRef(false);
  const logout = () => {
    AsyncStorage.clear();
    DevSettings.reload();
  };

  useEffect(() => {
    const getStorage = async () => {
      const userId = await AsyncStorage.getItem('userId');
      const token = await AsyncStorage.getItem('token');

      if (token && userId) {
        axios
          .get(`${window.api}/auth/user/${userId}`, {
            headers: {Authorization: 'Bearer ' + token},
          })
          .then(res => {
            if (res.status === 200) {
              dispatch(getUser(res.data));
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        logout();
      }
    };
    getStorage();
    return () => {
      restUser.current = true;
    };
  }, [update]);

  return <Home />;
};

export default Preloader;
