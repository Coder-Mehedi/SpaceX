import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screen} from 'utils/screens';
import {navigatorHeaderOptions} from 'utils/navigatorHeaderOptions';
import MenuBar from 'components/_root/menu-bar';
import {Colors} from 'utils/colors';
import Company from 'screens/company';
import {CompanyInfoProvider} from 'components/_context/companyInfoContext';

const Stack = createStackNavigator();

const CompanyRoute = () => {
  return (
    <CompanyInfoProvider>
      <Stack.Navigator screenOptions={navigatorHeaderOptions}>
        <Stack.Screen
          name={Screen.Company}
          component={Company}
          options={{
            headerLeft: () => <MenuBar />,
            cardStyle: {backgroundColor: Colors.background},
          }}
        />
      </Stack.Navigator>
    </CompanyInfoProvider>
  );
};

export default CompanyRoute;
