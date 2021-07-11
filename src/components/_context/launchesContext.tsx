import {useQuery} from '@apollo/client';
import React, {createContext, useContext} from 'react';
import launchNext from 'api/graphql/query/launchNext.gql';
import launchesPast from 'api/graphql/query/launchesPast.gql';
import {useRoute} from '@react-navigation/native';
import {ILaunch} from 'utils/interfaces';

const LaunchesContext = createContext<{
  launchNext: ILaunch[] | null;
  launchNextLoading: boolean;
  launchesPast: ILaunch[] | null;
  launchesPastLoading: boolean;
  fetchMorePast: any;
}>({
  launchNext: null,
  launchNextLoading: true,
  launchesPast: null,
  launchesPastLoading: true,
  fetchMorePast: () => {},
});

function LaunchesProvider({children}: any) {
  const route = useRoute();
  console.log('route', route.params);
  const {data: launchNextData, loading: launchNextLoading} = useQuery(
    launchNext,
    {onError: err => console.log(err)},
  );
  const {
    data: launchesPastData,
    loading: launchesPastLoading,
    fetchMore: fetchMorePast,
  } = useQuery(launchesPast, {
    variables: {limit: 10, offset: 0},
    onError: err => console.log(err),
  });

  return (
    <LaunchesContext.Provider
      value={{
        launchNext: launchNextData?.launchNext,
        launchNextLoading,
        launchesPast: launchesPastData?.launchesPast,
        launchesPastLoading,
        fetchMorePast,
      }}>
      {children}
    </LaunchesContext.Provider>
  );
}

const useLaunches = () => useContext(LaunchesContext);

export {LaunchesProvider, useLaunches};
