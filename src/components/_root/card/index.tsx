import React, {ReactChild} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Colors} from 'utils/colors';
interface CardProps {
  children: ReactChild;
  style?: StyleProp<ViewStyle>;
}

const Card = ({children, style}: CardProps) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    margin: 15,
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: Colors.cardBackground,
    borderRadius: 5,
  },
});

export default Card;
