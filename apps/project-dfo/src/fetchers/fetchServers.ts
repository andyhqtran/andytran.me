import { API_KEY, API_URL } from '~/constants/env';

export type Server = {
  serverId: 'cain' | 'siroco';
  serverName: string;
};

export type FetchServersResponse = Server[];

export const fetchServers = async (): Promise<FetchServersResponse> => {
  const searchParams = new URLSearchParams(`apikey=${API_KEY}`);

  return await fetch(`${API_URL}/servers?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => res.rows);
};
