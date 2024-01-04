export const formatChangePercent = (percent: number) => {
  return percent > 0
    ? `+${formatVolume(percent)}%`
    : `${formatVolume(percent)}%`;
};

export const formatVolume = (volume: number) => {
  return volume.toLocaleString("ru-RU");
};
