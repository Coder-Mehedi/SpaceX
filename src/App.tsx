import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ApolloProvider} from '@apollo/client';
import {client} from 'config/apollo';
import LaunchesRoute from 'navigations/Launches';
import CustomDrawerContent from 'components/_root/custom-drawer-content';
import RocketsRoute from 'navigations/Rockets';
import {Colors} from 'utils/colors';
import {Screen} from 'utils/screens';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}
          drawerStyle={{
            backgroundColor: Colors.secondaryBackground,
          }}
          drawerContentOptions={{
            activeTintColor: Colors.focused,
            inactiveTintColor: Colors.inActive,
          }}>
          <Drawer.Screen name={Screen.Launches} component={LaunchesRoute} />
          <Drawer.Screen name={Screen.Rockets} component={RocketsRoute} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
