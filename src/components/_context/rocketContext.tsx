import {useQuery} from '@apollo/client';
import React, {createContext, useContext, useState} from 'react';
import GET_ROCKET from 'api/graphql/query/rocket.gql';
import {useNavigation, useRoute} from '@react-navigation/native';
import {IRocket} from 'utils/interfaces';

const RocketContext = createContext<{
  rocket: IRocket | null;
  rocketLoading: boolean;
  setRocketId: (rocketId: string) => void;
}>({
  rocket: null,
  rocketLoading: false,
  setRocketId: (rocketId: string) => {},
});

function RocketProvider({children}: any) {
  const [rocketId, setRocketId] = useState('');
  const {data: rocket, loading: rocketLoading} = useQuery(GET_ROCKET, {
    variables: {id: rocketId},
    onError: err => console.log(err),
    skip: !rocketId,
  });

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
