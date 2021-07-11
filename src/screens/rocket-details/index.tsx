import {useRocket} from 'components/_context/rocketContext';
import ProgressBar from 'components/_root/progress-bar';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'utils/colors';
import {IRocket} from 'utils/interfaces';

const RocketDetails = ({navigation, route}: any) => {
  const {rocket, rocketLoading, setRocketId} = useRocket();

  useEffect(() => {
    setRocketId(route?.params?.rocketId);
  }, [route]);

  const resultToShow: any = {
    Company: rocket?.company,
    Country: rocket?.country,
    'Cost per launch': rocket?.cost_per_launch,
    'Success rate': rocket?.success_rate_pct,
    'Date first flight': rocket?.first_flight,
    Boosters: rocket?.boosters,
    States: rocket?.stages,
  };
  if (rocketLoading) return <ProgressBar />;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{rocket?.name}</Text>
      <Text style={styles.description}>{rocket?.description}</Text>
      {Object.keys(resultToShow).map(item => (
        <RocketDetails.ListItem
          key={item}
          label={item}
          value={resultToShow[item]}
        />
      ))}
    </View>
  );
};
RocketDetails.ListItem = ({label, value}: {label: string; value: string}) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.text}>{label}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  text: {
    color: Colors.primaryText,
    fontSize: 16,
  },
  description: {
    color: Colors.primaryText,
    fontSize: 16,
    paddingVertical: 20,
  },
  name: {
    color: Colors.primaryText,
    fontSize: 30,
  },

  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
  },
});

export default RocketDetails;
