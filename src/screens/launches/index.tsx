import React from 'react';
import TabView from 'components/_root/tab-view';
import UpcomingLaunches from 'screens/launches/upcoming-launches';
import CompletedLaunches from 'screens/launches/completed-launches';

const Launches = () => {
  const routes = [
    {key: 'first', title: 'Upcoming', icon: 'clock'},
    {key: 'second', title: 'Completed', icon: 'check-circle'},
  ];

  const renderScene = {
    first: UpcomingLaunches,
    second: CompletedLaunches,
  };

  return <TabView routes={routes} renderScene={renderScene} />;
};

export default Launches;
