import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View} from 'react-native';
import TabView from 'components/_root/tab-view';
import {Colors} from 'utils/colors';
import ProgressBar from 'components/_root/progress-bar';
import Button from 'components/_root/button';
import LaunchDetailsCard from 'components/launch-details-card';
import {FlatList} from 'react-native-gesture-handler';
import {useLaunches} from 'components/_context/launchesContext';
import LaunchCard from 'components/launch-card';
import {ILaunch} from 'utils/interfaces';

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
  return <LaunchDetailsCard launch={launchNext} />;
};

const CompletedLaunches = () => {
  const {launchesPast, launchesPastLoading, fetchMorePast} = useLaunches();
  if (launchesPastLoading) return <ProgressBar />;

  return (
    <View>
      <FlatList
        onEndReached={() =>
          fetchMorePast({variables: {offset: launchesPast?.length}})
        }
        data={launchesPast}
        renderItem={({item: launch}: {item: ILaunch}) => (
          <LaunchCard launch={launch} />
        )}
      />
    </View>
  );
};
