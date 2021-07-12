import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screen} from 'utils/screens';
import {navigatorHeaderOptions} from 'utils/navigatorHeaderOptions';
import Vehicles from 'screens/vehicles';
import MenuBar from 'components/_root/menu-bar';
import {Colors} from 'utils/colors';
import {RocketProvider} from 'components/_context/rocketContext';
import Launches from 'screens/launches';
import {LaunchesProvider} from 'components/_context/launchesContext';
import {VehicleProvider} from 'components/_context/vehicleContext';

const Stack = createStackNavigator();

const VehiclesRoute = ({navigation}: any) => {
  return (
    <VehicleProvider>
      <Stack.Navigator screenOptions={navigatorHeaderOptions}>
        <Stack.Screen
          name={Screen.Vehicles}
          component={Vehicles}
          options={{
            headerLeft: () => <MenuBar />,
            cardStyle: {backgroundColor: Colors.background},
          }}
        />
      </Stack.Navigator>
    </VehicleProvider>
  );
};

export default VehiclesRoute;
