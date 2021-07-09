import React, {ReactChild} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Colors} from 'utils/colors';

const Card = ({children}: {children: ReactChild}) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    margin: 15,
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: Colors.cardBackground,
  },
});

export default Card;
