import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    paddingLeft: 6
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorAppBar: {
    color: theme.colors.appBarText
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeRegular: {
    fontSize: 16
  },
  fontWeightBold: {
    fontWeight: '700',
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    props.color === 'textSecondary' && styles.colorTextSecondary,
    props.color === 'primary' && styles.colorPrimary,
    props.color === 'appBarText' && styles.colorAppBar,
    props.fontSize ? 'subheading' && styles.fontSizeSubheading : styles.fontSizeRegular,
    props.fontWeight === 'bold' && styles.fontWeightBold,
    props.style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;