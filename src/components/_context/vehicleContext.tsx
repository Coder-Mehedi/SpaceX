import {useQuery} from '@apollo/client';
import React, {createContext, useContext, useState} from 'react';
import GET_ROCKETS from 'api/graphql/query/rockets.gql';
import GET_CAPSULES from 'api/graphql/query/capsules.gql';
import {useNavigation, useRoute} from '@react-navigation/native';
import {IRocket} from 'utils/interfaces';

const VehicleContext = createContext({
  rockets: null,
  rocketsLoading: true,
  capsules: [],
  capsulesLoading: true,
  fetchMoreVehicles: (veriables: any) => {},
});

function VehicleProvider({children}: any) {
  const {data: rockets, loading: rocketsLoading} = useQuery(GET_ROCKETS, {
    onError: err => console.log(err),
  });

  const {
    data: capsules,
    loading: capsulesLoading,
    fetchMore: fetchMoreVehicles,
  } = useQuery(GET_CAPSULES, {
    variables: {limit: 10, offset: 0},
    onError: err => console.log(err),
  });

  return (
    <VehicleContext.Provider
      value={{
        rockets: rockets?.rockets,
        rocketsLoading,
        capsules: capsules?.capsules,
        capsulesLoading,
        fetchMoreVehicles,
      }}>
      {children}
    </VehicleContext.Provider>
  );
}

const useVehicle = () => useContext(VehicleContext);

export {VehicleProvider, useVehicle};
