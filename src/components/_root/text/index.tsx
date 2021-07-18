import React, {ReactNode} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as ReactNativeText,
  TextStyle,
} from 'react-native';
import {Colors} from 'utils/colors';
import {Fonts} from 'utils/fonts';

interface TextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

const Text = ({children, style}: TextProps) => {
  return (
    <ReactNativeText style={[styles.text, style]}>{children}</ReactNativeText>
  );
};

Text.Primary = ({children, style}: TextProps) => {
  return (
    <ReactNativeText style={[styles.primary, style]}>
      {children}
    </ReactNativeText>
  );
};

Text.Secondary = ({children, style}: TextProps) => {
  return (
    <ReactNativeText style={[[styles.secondary, style]]}>
      {children}
    </ReactNativeText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.primaryText,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.UbuntuRegular,
  },
  primary: {
    color: Colors.primaryText,
    fontSize: 30,
    fontFamily: Fonts.UbuntuBold,
  },
  secondary: {
    color: Colors.secondaryText,
    fontSize: 16,
  },
});

export default Text;
