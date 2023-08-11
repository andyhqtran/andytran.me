import { NextResponse } from 'next/server';

import { fetchCharacters } from '~/fetchers/fetchCharacters';
import { Server } from '~/fetchers/fetchServers';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const characters = await fetchCharacters({
    characterName: searchParams.get('characterName') as string,
    serverId: searchParams.get('serverId') as Server['severId'] | 'all',
  });

  return NextResponse.json(characters);
}
