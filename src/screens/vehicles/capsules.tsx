import ListItem from 'components/list-item';
import {useVehicle} from 'components/_context/vehicleContext';
import Card from 'components/_root/card';
import ProgressBar from 'components/_root/progress-bar';
import Text from 'components/_root/text';
import React from 'react';
import {View, FlatList} from 'react-native';
import formatDate from 'utils/formatDate';
import {ICapsule} from 'utils/interfaces';

const Capsules = () => {
  const {capsules, capsulesLoading, fetchMoreVehicles} = useVehicle();
  // return <View style={{flex: 1}} />;
  console.log('capsulesLoading', capsulesLoading);
  if (capsulesLoading) return <ProgressBar />;
  return (
    <View style={{flex: 1}}>
      <FlatList
        ListFooterComponent={capsulesLoading ? <ProgressBar /> : null}
        data={capsules}
        onEndReached={() =>
          fetchMoreVehicles({variables: {offset: capsules?.length}})
        }
        renderItem={({item: capsule}: {item: ICapsule}) => (
          <Card>
            <View style={{flex: 1}}>
              <Text.Primary>
                <>
                  {capsule.id} - {capsule.type}
                </>
              </Text.Primary>
              <ListItem label="Status" value={capsule.status} />
              <ListItem label="Missions" value={capsule.missions.length} />
              <ListItem
                label="Original Launch"
                value={formatDate(capsule?.original_launch, true)}
              />
            </View>
          </Card>
        )}
      />
    </View>
  );
};

export default Capsules;
