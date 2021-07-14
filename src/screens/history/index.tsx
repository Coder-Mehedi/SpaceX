import React from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {Colors} from 'utils/colors';
import Timeline from 'react-native-timeline-flatlist';
import {useHistory} from 'components/_context/historyProvider';
import formatDate from 'utils/formatDate';
import ProgressBar from 'components/_root/progress-bar';
import Text from 'components/_root/text';
import Button from 'components/_root/button';

const History = () => {
  const {histories, historiesLoading} = useHistory();

  if (historiesLoading) return <ProgressBar />;

  const formattedHistories = histories?.map(history => ({
    time: formatDate(history.event_date_utc, {yearOnly: true}),
    title: history.title,
    description: history.details,
    article: history.links.article,
  }));

  const renderDetail = (rowData: any, sectionID: number, rowID: number) => {
    let title = <Text style={styles.title}>{rowData.title}</Text>;
    var desc = null;
    if (rowData.description)
      desc = (
        <View>
          <Text.Secondary>{rowData.description}</Text.Secondary>
          <Button
            title="More Info"
            icon="link"
            onPress={() => Linking.openURL(rowData.article)}
          />
        </View>
      );

    return (
      <View style={{flex: 1}}>
        {title}
        {desc}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Timeline
        data={formattedHistories}
        circleSize={20}
        circleColor={Colors.active}
        lineColor={Colors.active}
        timeContainerStyle={{minWidth: 52}}
        timeStyle={{
          textAlign: 'center',
          color: Colors.primaryText,
          padding: 5,
        }}
        titleStyle={{color: Colors.primaryText}}
        descriptionStyle={{color: Colors.secondaryText}}
        renderDetail={renderDetail}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 22,
    paddingBottom: 5,
  },
});
export default History;
