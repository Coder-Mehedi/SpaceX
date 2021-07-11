import Button from 'components/_root/button';
import Card from 'components/_root/card';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from 'utils/colors';
import dateFormat from 'dateformat';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'utils/screens';
import {CommonActions} from '@react-navigation/native';

const LaunchesCard = ({launch, route}: any) => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <Card>
        <View>
          <Text style={styles.siteName}>{launch.launch_site.site_name}</Text>
          <Text style={styles.missionName}>{launch.mission_name}</Text>
          <Text style={styles.launchDate}>
            {dateFormat(launch.launch_date_utc, 'd mmmm, yyyy, h:MM:ss TT')}
          </Text>
          {launch.static_fire_date_utc && (
            <Text style={styles.staticFireDate}>
              {dateFormat(
                launch.static_fire_date_utc,
                'd mmmm, yyyy, h:MM:ss TT',
              )}{' '}
              (static fire)
            </Text>
          )}
          <Text style={styles.details}>{launch.details}</Text>

          <Button
            title="Rocket Specs"
            onPress={() => {
              navigation.navigate(Screen.RocketDetails, {
                rocketId: launch.rocket.rocket.id,
              });
            }}
            icon="rocket"
          />
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  siteName: {
    color: Colors.secondaryText,
    fontSize: 16,
  },
  missionName: {
    color: Colors.primaryText,
    fontSize: 30,
  },
  launchDate: {
    color: Colors.secondaryText,
    fontSize: 16,
  },
  staticFireDate: {
    color: Colors.secondaryText,
    fontSize: 16,
  },
  details: {
    color: Colors.primaryText,
    fontSize: 16,
    paddingVertical: 10,
    letterSpacing: 1,
  },
});

export default LaunchesCard;
