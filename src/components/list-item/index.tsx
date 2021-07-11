import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from 'utils/colors';

const ListItem = ({label, value}: {label: string; value: string}) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.text}>{label}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
  },
  text: {
    color: Colors.primaryText,
    fontSize: 16,
  },
});

export default ListItem;
