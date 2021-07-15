import React from 'react';
import * as Progress from 'react-native-progress';
import {Colors} from 'utils/colors';

const ProgressBar = () => {
  return (
    <Progress.Bar
      style={{width: '100%', marginTop: 5}}
      height={3}
      indeterminateAnimationDuration={2000}
      indeterminate
      borderWidth={0}
      color={Colors.active}
    />
  );
};

export default ProgressBar;
