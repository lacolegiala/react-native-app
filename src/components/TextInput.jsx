import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	textInput: {
		fontSize: 20,
		borderWidth: 0.5,
		borderColor: '#B7BAB7',
		marginHorizontal: 10,
		marginTop: 12,
		borderRadius: 6,
		padding: 6
	}
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.textInput];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;