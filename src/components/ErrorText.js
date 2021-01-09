import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ErrorText = ({error}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{error}</Text>
  </View>
);

export default ErrorText;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
  },
});
