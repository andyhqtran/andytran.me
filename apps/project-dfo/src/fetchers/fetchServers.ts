import { API_KEY, API_URL } from '~/constants/env';

export type Server = {
  severId: string;
  serverName: string;
};

export type FetchServersResponse = {
  rows: Server[];
};

export const fetchServers = async (): Promise<FetchServersResponse> => {
  const searchParams = new URLSearchParams(`apikey=${API_KEY}`);

  return await fetch(`${API_URL}/servers?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  }).then((res) => res.json());
};
