import {useRocket} from 'components/_context/rocketContext';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'utils/colors';

const RocketDetails = ({navigation, route}: any) => {
  const {rocket, rocketLoading, setRocketId} = useRocket();

  useEffect(() => {
    setRocketId(route?.params?.rocketId);
  }, [route]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rocket Details</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.primaryText,
  },
});

export default RocketDetails;
