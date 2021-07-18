import ListItem from 'components/list-item';
import {useRocket} from 'components/_context/rocketContext';
import ProgressBar from 'components/_root/progress-bar';
import Text from 'components/_root/text';
import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Colors} from 'utils/colors';
import {setRocketImage} from 'utils/setRocketImage';

const RocketDetails = ({route}: any) => {
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
      <Image
        style={styles.rocketImage}
        source={setRocketImage(rocket?.name as string)}
      />
      <Text.Primary style={styles.name}>{rocket?.name}</Text.Primary>
      <Text style={styles.description}>{rocket?.description}</Text>
      {Object.keys(resultToShow).map(item => (
        <ListItem key={item} label={item} value={resultToShow[item]} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  rocketImage: {
    width: '100%',
    height: 200,
  },
  description: {
    color: Colors.primaryText,
    fontSize: 16,
    paddingVertical: 20,
  },
  name: {
    paddingTop: 15,
  },
});

export default RocketDetails;
