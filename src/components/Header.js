import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({children, style, ...props}) => (
  <View>
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'black',
  },
});
