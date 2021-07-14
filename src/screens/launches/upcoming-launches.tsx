import LaunchDetailsCard from 'components/launch-details-card';
import {useLaunches} from 'components/_context/launchesContext';
import ProgressBar from 'components/_root/progress-bar';
import React from 'react';

const UpcomingLaunches = () => {
  const {launchNext, launchNextLoading} = useLaunches();

  if (launchNextLoading) return <ProgressBar />;
  return <LaunchDetailsCard launch={launchNext} />;
};

export default UpcomingLaunches;
