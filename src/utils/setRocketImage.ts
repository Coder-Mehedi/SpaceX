export const setRocketImage = (rocketName: string) => {
  if (rocketName === 'Falcon 1') return require('assets/images/falcon_1.jpg');
  if (rocketName === 'Falcon 9') return require('assets/images/falcon_9.jpg');
  if (rocketName === 'Falcon Heavy')
    return require('assets/images/falcon_heavy.jpg');
  if (rocketName === 'Starship') return require('assets/images/starship.jpg');
};
