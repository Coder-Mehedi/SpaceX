import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screen} from 'utils/screens';
import {navigatorHeaderOptions} from 'utils/navigatorHeaderOptions';
import Cores from 'screens/cores';
import MenuBar from 'components/_root/menu-bar';
import {Colors} from 'utils/colors';

const Stack = createStackNavigator();

const CoresRoute = ({navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={navigatorHeaderOptions}>
      <Stack.Screen
        name={Screen.Cores}
        component={Cores}
        options={{
          headerLeft: () => <MenuBar />,
          cardStyle: {backgroundColor: Colors.background},
        }}
      />
    </Stack.Navigator>
  );
};

export default CoresRoute;
