import React from 'react';
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Colors} from 'utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Props {
  title: string;
  icon?: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  style?: StyleProp<TouchableOpacityProps>;
}

const Button = ({title, onPress, icon, style}: Props) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {icon && <Icon name={icon} color={Colors.active} size={18} />}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.active,
    paddingLeft: 10,
    fontSize: 18,
    textTransform: 'uppercase',
  },
});

export default Button;
