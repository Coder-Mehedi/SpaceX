export const setRocketImage = (rocketName: string) => {
  if (rocketName === 'Falcon 1') return require('image/falcon_1.jpg');
  if (rocketName === 'Falcon 9') return require('image/falcon_9.jpg');
  if (rocketName === 'Falcon Heavy') return require('image/falcon_heavy.jpg');
  if (rocketName === 'Starship') return require('image/starship.jpg');
};
