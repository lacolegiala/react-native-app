import React from 'react';
import { View, Button } from 'react-native'
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik'

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        password: ''
      }}
      onSubmit={onSubmit}
    >
      <View>
        <FormikTextInput name='username' placeholder='Username' />
        <FormikTextInput name='password' placeholder='Password' />
        <Button title='Sign in' onPress={onSubmit} />
      </View>
    </Formik>
  );
};

export default SignIn;