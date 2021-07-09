import React, {ReactNode, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, useWindowDimensions} from 'react-native';
import {
  TabView as NativeTabView,
  SceneMap,
  Route,
  TabBar,
} from 'react-native-tab-view';
import {Colors} from 'utils/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

interface Props {
  routes: Route[];
  renderScene: {
    [key: string]: React.ComponentType<unknown>;
  };
}

const TabView = ({routes, renderScene}: Props) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const renderSceneMap = SceneMap(renderScene);
  const renderTabBar = (props: any) => (
    <TabBar
      renderIcon={({route}) => (
        <FontAwesome name={route.icon as string} color="white" size={20} />
      )}
      {...props}
      indicatorStyle={{backgroundColor: Colors.active}}
      style={{backgroundColor: Colors.background}}
    />
  );

  return (
    <NativeTabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderSceneMap}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default TabView;
