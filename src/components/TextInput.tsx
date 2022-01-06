import React from 'react';
import { TextInput as NativeTextInput, StyleSheet, TextStyle, StyleProp } from 'react-native';

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
  },
  error: {
    borderColor: 'red'
  }
});

type Props = {
  style?: StyleProp<TextStyle>,
  error?: string | false,
  secure: boolean,
  onChangeText: (value: any) => void,
  onBlur: (value: any) => void,
  value: string
}

const TextInput = (props: Props) => {
  const textInputStyle = [props.style, styles.textInput];

  if (!props.error) {
    return <NativeTextInput style={textInputStyle} secureTextEntry={props.secure} {...props} />;
  }
  else {
    return <NativeTextInput style={[textInputStyle, styles.error]} secureTextEntry={props.secure} {...props} />;
  }
};

export default TextInput;