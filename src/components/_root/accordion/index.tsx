import React, {ReactNode, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  ViewStyle,
  StyleProp,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'utils/colors';
import Text from 'components/_root/text';

interface Props {
  children: ReactNode;
  title: string;
  style?: StyleProp<ViewStyle>;
}

const Accordion = ({children, title, style}: Props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.row} onPress={toggleExpand}>
        <Text.Primary>{title}</Text.Primary>
        <Icon
          name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={30}
          color={Colors.active}
        />
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {expanded && <View style={styles.data}>{children}</View>}
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
