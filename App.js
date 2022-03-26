import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify, { Auth } from 'aws-amplify';
import config from './src/aws-exports';
import Navigation from './navigation';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function App() {
  return <Navigation></Navigation>
}

export default withAuthenticator(App,{
  signUpConfig:{
    hideSignUp:true
  }
})

