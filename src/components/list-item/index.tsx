import Text from 'components/_root/text';
import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from 'utils/colors';

const ListItem = ({label, value}: {label: string; value: string | number}) => {
  return (
    <View style={styles.listContainer}>
      <Text>{label}</Text>
      <Text>{value}</Text>
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

  sectionTitle: {
    color: Colors.primaryText,
    fontSize: 30,
    marginVertical: 30,
  },
});

export default ListItem;
