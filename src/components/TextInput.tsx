import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	textInput: {
		fontSize: 16,
		borderWidth: 0.8,
		borderColor: '#B7BAB7',
		backgroundColor: 'white',
		marginHorizontal: 10,
		marginTop: 12,
		borderRadius: 4,
		padding: 12
	}
});

const TextInput = ({ style, error, secure, ...props }) => {
  const textInputStyle = [style, styles.textInput];

  return <NativeTextInput style={textInputStyle} secureTextEntry={secure} {...props} />;
};

export default TextInput;