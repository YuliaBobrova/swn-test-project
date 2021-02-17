export const getSeason = (episode: string): string => {
  const seasoneNumber = parseInt(episode.split("E")[0].replace("S", ""));
  return `${seasoneNumber}`;
};

export const getEisodeNumber = (episode: string): string => {
  const episodeNumber = parseInt(episode.split("E")[1]);
  return `${episodeNumber}`;
};
