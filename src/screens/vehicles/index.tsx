import React from 'react';
import TabView from 'components/_root/tab-view';
import Capsules from 'screens/vehicles/capsules';
import Rockets from 'screens/vehicles/rockets';
import Ships from 'screens/vehicles/ships';

const Vehicles = ({route}: any) => {
  const [routes] = React.useState([
    {key: 'first', title: 'Rockets', icon: 'rocket'},
    {key: 'second', title: 'Capsules', icon: 'paper-plane'},
    {key: 'third', title: 'Ships', icon: 'ship'},
  ]);

  const renderScene = {
    first: Rockets,
    second: Capsules,
    third: Ships,
  };

  return <TabView routes={routes} renderScene={renderScene} />;
};

export default Vehicles;
