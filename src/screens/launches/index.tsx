import {useQuery} from '@apollo/client';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {View} from 'react-native';
import TabView from 'components/_root/tab-view';
import {Colors} from 'utils/colors';
import ProgressBar from 'components/_root/progress-bar';
import Button from 'components/_root/button';
import LaunchesCard from 'components/launches-card';
import {FlatList} from 'react-native-gesture-handler';
import {useLaunches} from 'components/_context/launchesContext';

const Launches = () => {
  const [routes] = React.useState([
    {key: 'first', title: 'Upcoming', icon: 'clock'},
    {key: 'second', title: 'Completed', icon: 'check-circle'},
  ]);

  const renderScene = {
    first: UpcomingLaunches,
    second: CompletedLaunches,
  };

  return <TabView routes={routes} renderScene={renderScene} />;
};

export default Launches;
const UpcomingLaunches = () => {
  const {launchNext, launchNextLoading} = useLaunches();

  if (launchNextLoading) return <ProgressBar />;
  return <LaunchesCard launch={launchNext} />;
};

const CompletedLaunches = () => <View style={{flex: 1}} />;
