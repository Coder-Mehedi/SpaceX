import {useQuery} from '@apollo/client';
import React, {useEffect} from 'react';

import launchesUpcoming from 'api/graphql/query/launchesUpcoming.gql';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View} from 'react-native';
import TabView from 'components/_root/tab-view';
import {useRocket} from 'components/_context/rocketContext';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useVehicle} from 'components/_context/vehicleContext';
import {FlatList} from 'react-native-gesture-handler';
import {IRocket} from 'utils/interfaces';
import Card from 'components/_root/card';
import Text from 'components/_root/text';
import Accordion from 'components/_root/accordion';

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
const Rockets = () => {
  const {rockets, rocketsLoading} = useVehicle();
  if (rockets) console.log('rockets', rockets);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={rockets}
        renderItem={({item: rocket}: {item: IRocket}) => (
          <Card>
            <Accordion data={rocket.description} title={rocket.name} />
          </Card>
        )}
      />
    </View>
  );
};

const Capsules = () => <View style={{flex: 1}} />;

const Ships = () => <View style={{flex: 1}} />;
