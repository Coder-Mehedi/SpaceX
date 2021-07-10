import React from 'react';
import {
  Button as NativeButton,
  ButtonProps,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Props {
  title: string;
  icon?: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

const Button = ({title, onPress, icon}: Props) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
      }}
      onPress={onPress}>
      {icon && <Icon name={icon} color={Colors.active} size={18} />}
      <Text
        style={{
          color: Colors.active,
          paddingLeft: 10,
          fontSize: 18,
          textTransform: 'uppercase',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
