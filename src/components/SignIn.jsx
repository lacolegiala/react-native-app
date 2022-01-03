import React from 'react';
import { View } from 'react-native'
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik'

const SignIn = () => {
  return (
    <Formik>
      <View>
        <FormikTextInput name='username' placeholder='Username' />
        <FormikTextInput name='password' placeholder='Password' />
      </View>
    </Formik>
  );
};

export default SignIn;