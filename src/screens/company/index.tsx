import ListItem from 'components/list-item';
import {useCompanyInfo} from 'components/_context/companyInfoContext';
import ProgressBar from 'components/_root/progress-bar';
import Text from 'components/_root/text';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors} from 'utils/colors';

const Company = () => {
  const {company, companyLoading} = useCompanyInfo();

  if (companyLoading) return <ProgressBar />;
  const leadInfo: any = {
    CEO: company?.ceo,
    CTO: company?.cto,
    'CTO Propulsion Dept': company?.cto_propulsion,
    COO: company?.coo,
  };
  const statistics: any = {
    Value: company?.valuation,
    'Test sites': company?.test_sites,
    'Launch sites': company?.launch_sites,
    Employees: company?.employees,
    Vehicles: company?.vehicles,
  };
  return (
    <ScrollView>
      <Image
        source={require('image/spacex-logo-transparent.png')}
        resizeMode="cover"
        style={{width: '100%', height: 100}}
      />
      <View style={styles.container}>
        <Text style={styles.centered}>
          {company?.founder}, {company?.founded}
        </Text>
        <Text
          style={
            styles.centered
          }>{`${company?.headquarters.address}, ${company?.headquarters.city}, ${company?.headquarters.state}`}</Text>
        <Text style={styles.summary}>{company?.summary}</Text>
        <ListItem.SectionTitle>Lead</ListItem.SectionTitle>
        {Object.keys(leadInfo).map(info => (
          <ListItem key={info} label={info} value={leadInfo[info]} />
        ))}

        <ListItem.SectionTitle>Statistics</ListItem.SectionTitle>
        {Object.keys(statistics).map(info => (
          <ListItem key={info} label={info} value={statistics[info]} />
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  centered: {
    textAlign: 'center',
  },
  summary: {
    paddingVertical: 30,
  },
});
export default Company;
