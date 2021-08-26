import React from 'react';
import {View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../components/Input';

const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <Input label="Register" />
      </View>
    </SafeAreaView>
  );
};
export default Login;
