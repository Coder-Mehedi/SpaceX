import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Launches from 'screens/launches';
import {Screen} from 'utils/screens';
import {navigatorHeaderOptions} from 'utils/navigatorHeaderOptions';
import {Colors} from 'utils/colors';
import MenuBar from 'components/_root/menu-bar';
import {LaunchesProvider} from 'components/_context/launchesContext';
import {RocketProvider} from 'components/_context/rocketContext';
import RocketDetails from 'screens/rocket-details';
import LaunchDetailsCard from 'components/launch-details-card';

const Stack = createStackNavigator();

const LaunchesRoute = () => {
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
          <Stack.Screen
            name={Screen.LaunchDetails}
            component={LaunchDetailsCard}
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
