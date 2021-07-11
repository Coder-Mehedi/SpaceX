import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Launches from 'screens/launches';
import {Screen} from 'utils/screens';
import {navigatorHeaderOptions} from 'utils/navigatorHeaderOptions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'utils/colors';
import MenuBar from 'components/_root/menu-bar';
import {LaunchesProvider} from 'components/_context/launchesContext';
import Vehicles from 'screens/vehicles';
import {RocketProvider} from 'components/_context/rocketContext';
import RocketDetails from 'screens/rocket-details';

const Stack = createStackNavigator();

const LaunchesRoute = ({navigation}: any) => {
  return (
    <LaunchesProvider>
      <RocketProvider>
        <Stack.Navigator screenOptions={navigatorHeaderOptions}>
          <Stack.Screen
            name={Screen.Launches}
            component={Launches}
            options={{
              headerLeft: () => <MenuBar />,
              cardStyle: {backgroundColor: Colors.background},
            }}
          />
          <Stack.Screen
            name={Screen.RocketDetails}
            component={RocketDetails}
            options={{
              cardStyle: {backgroundColor: Colors.background},
            }}
          />
        </Stack.Navigator>
      </RocketProvider>
    </LaunchesProvider>
  );
};

export default LaunchesRoute;
