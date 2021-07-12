import {useNavigation} from '@react-navigation/native';
import Accordion from 'components/_root/accordion';
import Button from 'components/_root/button';
import Card from 'components/_root/card';
import Text from 'components/_root/text';
import React from 'react';
import {Image, View} from 'react-native';
import {IRocket} from 'utils/interfaces';
import {Screen} from 'utils/screens';

const RocketsAccordion = ({rocket}: {rocket: IRocket}) => {
  const navigation = useNavigation();

  const genRocketImg = () => {
    if (rocket.name === 'Falcon 1') return require('image/falcon_1.jpg');
    if (rocket.name === 'Falcon 9') return require('image/falcon_9.jpg');
    if (rocket.name === 'Falcon Heavy')
      return require('image/falcon_heavy.jpg');
    if (rocket.name === 'Starship') return require('image/starship.jpg');
  };

  return (
    <Card>
      <View style={{flex: 1}}>
        <Image
          source={genRocketImg()}
          resizeMode="cover"
          style={{width: '100%', height: 200, marginBottom: 15}}
        />
        <Accordion title={rocket.name}>
          <Text>{rocket.description}</Text>
          <Button
            title="Rocket Specs"
            onPress={() => {
              navigation.navigate(Screen.RocketDetails, {
                rocketId: rocket.id,
              });
            }}
            icon="rocket"
          />
        </Accordion>
      </View>
    </Card>
  );
};

export default RocketsAccordion;
