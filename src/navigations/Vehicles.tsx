import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screen} from 'utils/screens';
import {navigatorHeaderOptions} from 'utils/navigatorHeaderOptions';
import Rockets from 'screens/vehicles';
import MenuBar from 'components/_root/menu-bar';
import {Colors} from 'utils/colors';

const Stack = createStackNavigator();

const VehiclesRoute = ({navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={navigatorHeaderOptions}>
      <Stack.Screen
        name={Screen.Vehicles}
        component={Rockets}
        options={{
          headerLeft: () => <MenuBar />,
          cardStyle: {backgroundColor: Colors.background},
        }}
      />
    </Stack.Navigator>
  );
};

export default VehiclesRoute;
