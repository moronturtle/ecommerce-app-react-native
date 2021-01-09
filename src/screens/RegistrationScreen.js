import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import Header from '../components/Header';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import ErrorText from '../components/ErrorText';
import IconButton from '../components/IconButton';

const RegistrationScreen = ({navigation}) => (
  <View style={styles.container}>
    <Header style={styles.title}>Registration</Header>
    <IconButton
      style={styles.closeIcon}
      name="close-circle-outline"
      onPress={() => {
        navigation.pop();
      }}
    />
    <ErrorText error={''} />
    <Input
      style={styles.input}
      placeholder="Email"
      keyboardType="email-address"
    />
    <Input style={styles.input} placeholder="Password" secureTextEntry />
    <FilledButton
      title="Register"
      style={styles.loginButton}
      onPress={() => {}}
    />
  </View>
);

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 120,
    alignItems: 'center',
    backgroundColor: '#1e2145',
  },
  title: {
    marginBottom: 48,
    color: '#ffffff',
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
    backgroundColor: '#090d7d',
  },
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 16,
  },
});
