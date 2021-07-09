import {useQuery} from '@apollo/client';
import React from 'react';
import {Text} from 'react-native';
import launchesUpcoming from 'api/graphql/query/launchesUpcoming.gql';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View} from 'react-native';
import TabView from 'components/_root/tab-view';
import Card from 'components/_root/card';
import {Colors} from 'utils/colors';
import * as Progress from 'react-native-progress';
import ProgressBar from 'components/_root/progress-bar';

const Launches = () => {
  const {data, loading} = useQuery(launchesUpcoming);

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
  return (
    <>
      <ProgressBar loading={loading} />
      <View style={{flex: 1}}>
        <Card>
          <Text style={{color: Colors.primaryText}}>Hi</Text>
        </Card>
      </View>
    </>
  );
};

const CompletedLaunches = () => <View style={{flex: 1}} />;
