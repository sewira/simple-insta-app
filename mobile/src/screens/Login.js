import React from 'react';
import {View, Text} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../components/Input';

const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <Input label="Saaya ada lah label" />
      </View>
    </SafeAreaView>
  );
};
export default Login;
