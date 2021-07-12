import {useQuery} from '@apollo/client';
import React, {createContext, useContext, useState} from 'react';
import GET_ROCKETS from 'api/graphql/query/rockets.gql';
import {useNavigation, useRoute} from '@react-navigation/native';
import {IRocket} from 'utils/interfaces';

const VehicleContext = createContext({
  rockets: null,
  rocketsLoading: true,
});

function VehicleProvider({children}: any) {
  const {data: rockets, loading: rocketsLoading} = useQuery(GET_ROCKETS, {
    onError: err => console.log(err),
  });

  return (
    <VehicleContext.Provider
      value={{
        rockets: rockets?.rockets,
        rocketsLoading,
      }}>
      {children}
    </VehicleContext.Provider>
  );
}

const useVehicle = () => useContext(VehicleContext);

export {VehicleProvider, useVehicle};
