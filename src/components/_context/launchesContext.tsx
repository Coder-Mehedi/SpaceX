import {useQuery} from '@apollo/client';
import React, {createContext, useContext, useState} from 'react';
import launchNext from 'api/graphql/query/launchNext.gql';
import {useRoute} from '@react-navigation/native';

const LaunchesContext = createContext({
  launchNext: null,
  launchNextLoading: false,
});

function LaunchesProvider({children}: any) {
  const route = useRoute();
  console.log('route', route.params);
  const {data: launchNextData, loading: launchNextLoading} = useQuery(
    launchNext,
    {onError: err => console.log(err)},
  );

  return (
    <LaunchesContext.Provider
      value={{
        launchNext: launchNextData?.launchNext,
        launchNextLoading,
      }}>
      {children}
    </LaunchesContext.Provider>
  );
}

const useLaunches = () => useContext(LaunchesContext);

export {LaunchesProvider, useLaunches};
