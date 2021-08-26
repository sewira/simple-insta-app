import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = props => {
  return (
    <View>
      <Text>{props.label}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
  },
  input: {
    borderWidth: 1,
  },
});
