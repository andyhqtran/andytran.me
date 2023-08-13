export type Server = 'all' | 'cain' | 'siroco';

export type Character = {
  characterId: string;
  characterName: string;
  fame: number;
  jobGrowId: string;
  jobGrowName: string;
  jobId: string;
  jobName: string;
  serverId: Server;
};
