import {useQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import launchesUpcoming from 'api/graphql/query/launchesUpcoming.gql';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View} from 'react-native';
import TabView from 'components/_root/tab-view';
import {useRocket} from 'components/_context/rocketContext';
import {useNavigation, useRoute} from '@react-navigation/native';

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
const Rockets = () => <View style={{flex: 1}} />;

const Capsules = () => <View style={{flex: 1}} />;

const Ships = () => <View style={{flex: 1}} />;
