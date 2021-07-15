import {useQuery} from '@apollo/client';
import React, {createContext, useContext} from 'react';
import GET_HISTORIES from 'api/graphql/query/histories.gql';
import {IHistory} from 'utils/interfaces';

const HistoryContext = createContext<{
  histories: IHistory[] | null;
  historiesLoading: boolean;
}>({histories: null, historiesLoading: true});

function HistoryProvider({children}: any) {
  const {data: histories, loading: historiesLoading} = useQuery(GET_HISTORIES, {
    variables: {sort: 'event_date_utc'},
    onError: err => console.log(err),
  });

  return (
    <HistoryContext.Provider
      value={{
        histories: histories?.histories,
        historiesLoading,
      }}>
      {children}
    </HistoryContext.Provider>
  );
}

const useHistory = () => useContext(HistoryContext);

export {HistoryProvider, useHistory};
