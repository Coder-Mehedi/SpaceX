import Button from 'components/_root/button';
import Card from 'components/_root/card';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from 'utils/colors';
import dateFormat from 'dateformat';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'utils/screens';
import Text from 'components/_root/text';

const LaunchDetailsCard = ({launch, route}: any) => {
  const navigation = useNavigation();
  if (!launch) launch = route.params.launch;

  return (
    <Card>
      <View>
        <Text.Secondary>{launch.launch_site.site_name}</Text.Secondary>
        <Text.Primary>{launch.mission_name}</Text.Primary>
        <Text.Secondary>
          {dateFormat(launch.launch_date_utc, 'd mmmm, yyyy, h:MM:ss TT')}
        </Text.Secondary>
        {launch.static_fire_date_utc && (
          <Text.Secondary>
            <>
              {dateFormat(
                launch.static_fire_date_utc,
                'd mmmm, yyyy, h:MM:ss TT',
              )}{' '}
              (static fire)
            </>
          </Text.Secondary>
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
  );
};
const styles = StyleSheet.create({
  details: {
    paddingVertical: 10,
    letterSpacing: 1,
  },
});

export default LaunchDetailsCard;
