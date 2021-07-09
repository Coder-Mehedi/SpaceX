import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'utils/colors';

const MenuBar = () => {
  const navigation: any = useNavigation();
  return (
    <Icon
      name="bars"
      color={Colors.bar}
      size={30}
      onPress={navigation.openDrawer}
      style={{marginHorizontal: 20}}
    />
  );
};

export default MenuBar;
