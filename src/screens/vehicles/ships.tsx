import {useVehicle} from 'components/_context/vehicleContext';
import Card from 'components/_root/card';
import ProgressBar from 'components/_root/progress-bar';
import Text from 'components/_root/text';
import React from 'react';
import {FlatList, View, Image} from 'react-native';
import {IShip} from 'utils/interfaces';

const Ships = () => {
  const {ships, shipsLoading, fetchMoreShips} = useVehicle();
  if (shipsLoading) return <ProgressBar />;

  return (
    <FlatList
      onEndReached={() => fetchMoreShips({variables: {offset: ships?.length}})}
      data={ships}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item: ship}: {item: IShip}) => (
        <Card>
          <View style={{flex: 1}}>
            <Image
              source={{uri: ship.image}}
              style={{width: '100%', height: 200}}
            />
            <Text.Secondary style={{paddingTop: 15}}>
              {ship.type}
            </Text.Secondary>
            <Text.Primary>{ship.name}</Text.Primary>
          </View>
        </Card>
      )}
    />
  );
};

export default Ships;
