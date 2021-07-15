import {useNavigation} from '@react-navigation/native';
import Accordion from 'components/_root/accordion';
import Button from 'components/_root/button';
import Card from 'components/_root/card';
import Text from 'components/_root/text';
import React from 'react';
import {Image, View} from 'react-native';
import {IRocket} from 'utils/interfaces';
import {setRocketImage} from 'utils/setRocketImage';
import {Screen} from 'utils/screens';

const RocketsAccordion = ({rocket}: {rocket: IRocket}) => {
  const navigation = useNavigation();

  return (
    <Card>
      <View style={{flex: 1}}>
        <Image
          source={setRocketImage(rocket.name)}
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
