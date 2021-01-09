import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import Header from '../components/Header';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import TextButton from '../components/TextButton';
import ErrorText from '../components/ErrorText';

import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      console.log(response[0].id);
      setData(response);
    });
  });

  return (
    <View style={styles.container}>
      <Header style={styles.title}>Login</Header>
      <ErrorText error={''} />
      <Input
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(value) => setUserName(value)}
      />
      <Input
        style={styles.input}
        placeholder="Password"
        onChangeText={(value) => setPassword(value)}
        secureTextEntry
      />
      <FilledButton
        title="Login"
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <TextButton
        title="Have u an account ? create one"
        onPress={() => {
          navigation.navigate('Registration');
        }}
      />
    </View>
  );
};

export default LoginScreen;

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
});
