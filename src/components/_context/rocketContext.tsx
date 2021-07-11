import {useQuery} from '@apollo/client';
import React, {createContext, useContext, useState} from 'react';
import GET_ROCKET from 'api/graphql/query/rocket.gql';
import {useNavigation, useRoute} from '@react-navigation/native';

const RocketContext = createContext({
  rocket: null,
  rocketLoading: false,
  setRocketId: (rocketId: string) => {},
});

function RocketProvider({children}: any) {
  const route = useRoute();
  const navigation = useNavigation();
  console.log('route from context', route);
  console.log('navigation from context', navigation);

  const [rocketId, setRocketId] = useState('');
  const {data: rocket, loading: rocketLoading} = useQuery(GET_ROCKET, {
    variables: {id: rocketId},
    onError: err => console.log(err),
    skip: !rocketId,
  });

  console.log('rocket', rocketId, rocket);

  return (
    <RocketContext.Provider
      value={{
        rocket: rocket?.rocket,
        rocketLoading,
        setRocketId,
      }}>
      {children}
    </RocketContext.Provider>
  );
}

const useRocket = () => useContext(RocketContext);

export {RocketProvider, useRocket};
