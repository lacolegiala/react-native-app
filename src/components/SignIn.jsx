import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native'
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik'

import Text from './Text'

const onSubmit = (values) => {
  console.log(values);
};

const styles = StyleSheet.create({
  formCard: {
    backgroundColor: 'white'
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2A64CC',
    marginVertical: 12,
    marginHorizontal: 10
  },
})

const SignIn = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        password: ''
      }}
      onSubmit={(values) => onSubmit(values)}
    >
      <View style={styles.formCard}>
        <FormikTextInput name='username' placeholder='Username' />
        <FormikTextInput secure={true} name='password' placeholder='Password' />
        <Pressable style={styles.submitButton} onPress={(values) => onSubmit(values)}>
          <Text color='appBarText' fontWeight='bold'>Sign in</Text>
        </Pressable>
      </View>
    </Formik>
  );
};

export default SignIn;