import {useQuery} from '@apollo/client';
import React from 'react';
import {Text} from 'react-native';
import launchesUpcoming from 'api/graphql/query/launchesUpcoming.gql';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View} from 'react-native';
import TabView from 'components/_root/tab-view';
import {Colors} from 'utils/colors';
import ProgressBar from 'components/_root/progress-bar';
import Button from 'components/_root/button';
import LaunchesCard from 'components/launches-card';
import {FlatList} from 'react-native-gesture-handler';

const Launches = () => {
  const {data, loading} = useQuery(launchesUpcoming, {
    onError: e => console.log(e),
  });

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
  const {data, loading} = useQuery(launchesUpcoming);

  if (loading) return <ProgressBar />;
  return <LaunchesCard launch={data?.launchNext} />;
};

const CompletedLaunches = () => <View style={{flex: 1}} />;
