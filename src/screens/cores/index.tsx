import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'utils/colors';

const Cores = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cores</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.primaryText,
  },
});
export default Cores;
