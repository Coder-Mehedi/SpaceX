import {useNavigation} from '@react-navigation/native';
import Button from 'components/_root/button';
import Card from 'components/_root/card';
import Text from 'components/_root/text';
import dateFormat from 'dateformat';
import React from 'react';
import {StyleSheet, View, Linking, Pressable} from 'react-native';
import {Colors} from 'utils/colors';
import formatDate from 'utils/formatDate';
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
          <Text>
            <>F-NR {launch?.id}</>
          </Text>
          <Text.Primary>{launch?.mission_name}</Text.Primary>
          <Text>{formatDate(launch?.launch_date_utc)}</Text>
          {launch?.static_fire_date_utc && (
            <Text>
              <>
                {dateFormat(
                  launch.static_fire_date_utc,
                  'd mmmm, yyyy, h:MM:ss TT',
                )}{' '}
                <Text.Secondary>(static fire)</Text.Secondary>
              </>
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

export default LaunchCard;
