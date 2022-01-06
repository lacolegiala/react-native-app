import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native'
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik'
import * as yup from 'yup';

import Text from './Text'

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
})

const onSubmit = (values: SignInFormValues) => {
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

type SignInFormValues = {
  username: string,
  password: string
}

const SignIn = () => {
  const initialValues: SignInFormValues = {
    username: '',
    password: ''
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.formCard}>
          <FormikTextInput secure={false} name='username' placeholder='Username' />
          <FormikTextInput secure={true} name='password' placeholder='Password' />
          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <Text fontSize='regular' color='appBarText' fontWeight='bold'>Sign in</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;