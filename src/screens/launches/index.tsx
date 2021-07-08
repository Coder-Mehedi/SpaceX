import {useQuery} from '@apollo/client';
import React from 'react';
import {Text} from 'react-native';
import launchesUpcoming from 'api/graphql/query/launchesUpcoming.gql';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Launches = () => {
  const {data} = useQuery(launchesUpcoming);
  if (data) console.log(data);
  return <Text>Launches</Text>;
};

export default Launches;
