import React from 'react';

import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image} from 'react-native';

function CustomDrawerContent(
  props: DrawerContentComponentProps<DrawerContentOptions>,
) {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        style={{width: '100%', height: 200, marginBottom: 20}}
        source={{
          uri: 'https://cdn.dribbble.com/users/150724/screenshots/14693095/media/330f5914a7a017799a32d13fa07ff8fb.png',
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
