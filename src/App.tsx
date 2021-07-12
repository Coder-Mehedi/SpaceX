import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ApolloProvider} from '@apollo/client';
import {client} from 'config/apollo';
import LaunchesRoute from 'navigations/Launches';
import VehiclesRoute from 'navigations/Vehicles';
import {Colors} from 'utils/colors';
import {Screen} from 'utils/screens';
import CoresRoute from 'navigations/Cores';
import CustomDrawer from 'components/_root/custom-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CompanyRoute from 'navigations/Company';
import HistoryRoute from 'navigations/History';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <CustomDrawer {...props} />}
          drawerStyle={{
            backgroundColor: Colors.background,
          }}
          drawerContentOptions={{
            activeTintColor: Colors.primaryText,
            inactiveTintColor: Colors.inActive,
          }}>
          <Drawer.Screen
            name={Screen.Launches}
            component={LaunchesRoute}
            options={{
              drawerIcon: () => (
                <Icon name="rocket" color={Colors.active} size={20} />
              ),
            }}
          />
          <Drawer.Screen
            name={Screen.Vehicles}
            component={VehiclesRoute}
            options={{
              drawerIcon: () => (
                <Icon name="space-shuttle" color={Colors.active} size={20} />
              ),
            }}
          />
          <Drawer.Screen
            name={Screen.Cores}
            component={CoresRoute}
            options={{
              drawerIcon: () => (
                <Icon name="dot-circle" color={Colors.active} size={20} />
              ),
            }}
          />
          <Drawer.Screen
            name={Screen.Company}
            component={CompanyRoute}
            options={{
              drawerIcon: () => (
                <Icon name="xing" color={Colors.active} size={20} />
              ),
            }}
          />
          <Drawer.Screen
            name={Screen.History}
            component={HistoryRoute}
            options={{
              drawerIcon: () => (
                <Icon name="history" color={Colors.active} size={20} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
