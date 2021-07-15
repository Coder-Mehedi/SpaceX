import LaunchCard from 'components/launch-card';
import {useLaunches} from 'components/_context/launchesContext';
import ProgressBar from 'components/_root/progress-bar';
import React from 'react';
import {View, FlatList} from 'react-native';
import {ILaunch} from 'utils/interfaces';

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

export default CompletedLaunches;
