export const convertMinutesToHoursAndMinutes = (minutes: number) => {
  const hours = Math.trunc(minutes / 60);
  const convertedMinutes = minutes % 60;

  return `${hours}h ${convertedMinutes}m`;
};
