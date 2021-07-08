import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Launches from 'screens/launches';
import {Screen} from 'utils/screens';
import {navigatorHeaderOptions} from 'utils/navigatorHeaderOptions';

const Stack = createStackNavigator();

const LaunchesRoute = ({navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={navigatorHeaderOptions}>
      <Stack.Screen name={Screen.Launches} component={Launches} />
    </Stack.Navigator>
  );
};

export default LaunchesRoute;
