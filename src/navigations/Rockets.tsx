import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screen} from 'utils/screens';
import {navigatorHeaderOptions} from 'utils/navigatorHeaderOptions';
import Rockets from 'screens/rockets';

const Stack = createStackNavigator();

const RocketsRoute = ({navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={navigatorHeaderOptions}>
      <Stack.Screen name={Screen.Rockets} component={Rockets} />
    </Stack.Navigator>
  );
};

export default RocketsRoute;
