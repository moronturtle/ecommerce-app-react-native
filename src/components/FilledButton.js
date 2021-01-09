import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const FilledButton = ({title, style, onPress}) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text style={styles.text}>{title.toUpperCase()}</Text>
  </TouchableOpacity>
);

export default FilledButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: 320,
    alignItems: 'center',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});
