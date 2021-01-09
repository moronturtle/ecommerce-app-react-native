import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-ionicons';

const IconButton = ({name, style, onPress}) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Icon name={name} color="blue" />
  </TouchableOpacity>
);

export default IconButton;

const styles = StyleSheet.create({
  container: {},
});
