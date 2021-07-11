import {useNavigation} from '@react-navigation/native';
import Button from 'components/_root/button';
import Card from 'components/_root/card';
import dateFormat from 'dateformat';
import React from 'react';
import {StyleSheet, Text, View, Linking, Pressable} from 'react-native';
import {Colors} from 'utils/colors';
import {ILaunch} from 'utils/interfaces';
import {Screen} from 'utils/screens';

const LaunchCard = ({launch}: {launch: ILaunch}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate(Screen.LaunchDetails, {launch});
      }}>
      <Card>
        <View>
          <Text style={styles.siteName}>F-NR {launch?.id}</Text>
          <Text style={styles.missionName}>{launch?.mission_name}</Text>
          <Text style={styles.launchDate}>
            {dateFormat(launch?.launch_date_utc, 'd mmmm, yyyy, h:MM:ss TT')}
          </Text>
          {launch?.static_fire_date_utc && (
            <Text style={styles.staticFireDate}>
              {dateFormat(
                launch.static_fire_date_utc,
                'd mmmm, yyyy, h:MM:ss TT',
              )}{' '}
              (static fire)
            </Text>
          )}

          <Button
            title="Watch Now"
            onPress={() => {
              Linking.openURL(launch?.links.video_link as string);
            }}
            icon="youtube"
          />
        </View>
      </Card>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  siteName: {
    color: Colors.secondaryText,
    fontSize: 16,
  },
  missionName: {
    color: Colors.primaryText,
    fontSize: 26,
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

export default LaunchCard;
