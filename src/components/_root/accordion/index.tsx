import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'utils/colors';
import Text from 'components/_root/text';

const Accordion = ({data, title}: any) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={toggleExpand}>
        <Text.Primary>{title}</Text.Primary>
        <Icon
          name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={30}
          color={Colors.active}
        />
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {expanded && (
        <View style={styles.data}>
          <Text>{data}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  parentHr: {
    height: 1,
    color: Colors.primaryText,
    width: '100%',
  },

  data: {
    paddingVertical: 15,
  },
});

export default Accordion;
