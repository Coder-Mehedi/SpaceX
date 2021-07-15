import RocketsAccordion from 'components/rockets-accordion';
import {useVehicle} from 'components/_context/vehicleContext';
import ProgressBar from 'components/_root/progress-bar';
import React from 'react';
import {View, FlatList} from 'react-native';
import {IRocket} from 'utils/interfaces';

const Rockets = () => {
  const {rockets, rocketsLoading} = useVehicle();
  if (rocketsLoading) return <ProgressBar />;
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={rockets}
        renderItem={({item: rocket}: {item: IRocket}) => (
          <RocketsAccordion rocket={rocket} />
        )}
      />
    </View>
  );
};

export default Rockets;
