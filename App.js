import React from 'react';
import {NativeBaseProvider} from 'native-base'
import Singup from './Components/Home/Home'
const App = () => {
  return (
    <NativeBaseProvider>
      <Singup/>
    </NativeBaseProvider>
  )
};

export default App;
