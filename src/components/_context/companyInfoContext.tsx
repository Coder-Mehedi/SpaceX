import {useQuery} from '@apollo/client';
import React, {createContext, useContext, useState} from 'react';
import GET_COMPANY_INFO from 'api/graphql/query/company.gql';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ICompany} from 'utils/interfaces';

const CompanyInfoContext = createContext<{
  company: ICompany | null;
  companyLoading: boolean;
}>({company: null, companyLoading: true});

function CompanyInfoProvider({children}: any) {
  const {data: company, loading: companyLoading} = useQuery(GET_COMPANY_INFO, {
    onError: err => console.log(err),
  });

  return (
    <CompanyInfoContext.Provider
      value={{
        company: company?.company,
        companyLoading,
      }}>
      {children}
    </CompanyInfoContext.Provider>
  );
}

const useCompanyInfo = () => useContext(CompanyInfoContext);

export {CompanyInfoProvider, useCompanyInfo};
