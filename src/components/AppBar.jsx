import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../components/Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#25292C'
  },
  text: {
    color: 'white'
  }
});

const AppBar = () => {
  return <View style={styles.container}><Text color='appBarText' fontWeight='bold'>Repositories</Text></View>;
};

export default AppBar;