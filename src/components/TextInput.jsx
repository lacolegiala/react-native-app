import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	textInput: {
		fontSize: 20,
		borderWidth: 0.5,
		borderColor: '#B7BAB7'
	}
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.textInput];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;