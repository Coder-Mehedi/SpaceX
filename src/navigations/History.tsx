import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screen} from 'utils/screens';
import {navigatorHeaderOptions} from 'utils/navigatorHeaderOptions';
import Cores from 'screens/cores';
import MenuBar from 'components/_root/menu-bar';
import {Colors} from 'utils/colors';
import History from 'screens/history';

const Stack = createStackNavigator();

const HistoryRoute = ({navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={navigatorHeaderOptions}>
      <Stack.Screen
        name={Screen.History}
        component={History}
        options={{
          headerLeft: () => <MenuBar />,
          cardStyle: {backgroundColor: Colors.background},
        }}
      />
    </Stack.Navigator>
  );
};

export default HistoryRoute;
