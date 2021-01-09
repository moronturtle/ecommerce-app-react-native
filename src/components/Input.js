import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const Input = ({style, ...props}) => (
  <View>
    <TextInput {...props} style={[styles.input, style]} />
  </View>
);

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ccc',
    width: 320,
    padding: 20,
    borderRadius: 8,
  },
});
