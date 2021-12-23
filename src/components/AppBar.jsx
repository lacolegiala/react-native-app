import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../components/Text';
import Constants from 'expo-constants';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 16,
    paddingBottom: 16,
    backgroundColor: '#25292C',
    display: 'flex',
    flexDirection: 'row',
    opacity: 0.96
  },
  text: {
    color: 'white'
  }
});

const AppBar = () => {
  return (
    <Pressable onPress={console.log('aaa')}>
      <View style={styles.container}>
        <Text color='appBarText' fontWeight='bold' fontSize='subheading'>
          Repositories
        </Text>
        <Text color='appBarText' fontWeight='bold' fontSize='subheading'>
          Sign in
        </Text>
      </View>
    </Pressable>
  );
};

export default AppBar;