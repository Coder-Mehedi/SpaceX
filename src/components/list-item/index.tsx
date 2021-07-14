import React, {ReactNode} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from 'utils/colors';

const ListItem = ({label, value}: {label: string; value: string | number}) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.text}>{label}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

ListItem.SectionTitle = ({children}: {children: ReactNode}) => {
  return <Text style={styles.sectionTitle}>{children}</Text>;
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
  sectionTitle: {
    color: Colors.primaryText,
    fontSize: 30,
    marginVertical: 30,
  },
});

export default ListItem;
