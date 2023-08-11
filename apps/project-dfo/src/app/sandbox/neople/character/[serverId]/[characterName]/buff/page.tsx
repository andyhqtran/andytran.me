import 'react-json-view-lite/dist/index.css';

import { JsonViewer } from '~/components/JsonViewer';
import { getCharacterBuffAvatar } from '~/data/getCharacterBuffAvatar';
import { getCharacterBuffCreature } from '~/data/getCharacterBuffCreature';
import { getCharacters } from '~/data/getCharacters';

export default async function Page({ params }) {
  const characters = await getCharacters({
    characterName: params.characterName,
    serverId: params.serverId,
  });

  const character = characters?.[0];

  const buffAvatar = await getCharacterBuffAvatar({
    characterId: character.characterId,
    serverId: params.serverId,
  });

  const buffCreature = await getCharacterBuffCreature({
    characterId: character.characterId,
    serverId: params.serverId,
  });

  return (
    <>
      <h1>Buff avatar</h1>
      <JsonViewer data={buffAvatar} />

      <h1>Buff creature</h1>
      <JsonViewer data={buffCreature} />
    </>
  );
}
