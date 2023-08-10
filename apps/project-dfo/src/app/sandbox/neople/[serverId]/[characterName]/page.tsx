import 'react-json-view-lite/dist/index.css';

import { JsonViewer } from '~/components/JsonViewer';
import { getCharacters } from '~/data/getCharacters';
import { getCharactersEquipment } from '~/data/getCharactersEquipment';

export default async function Page({ params }) {
  const characters = await getCharacters({
    characterName: params.characterName,
    serverId: params.serverId,
  });

  const character = characters.rows?.[0];

  const equipment = await getCharactersEquipment({
    characterId: character.characterId,
    serverId: 'cain',
  });

  return (
    <>
      <h1>Character</h1>
      <JsonViewer data={character} />

      <h2>Equipment</h2>
      {equipment.map((equip, index) => (
        <div key={index}>
          <h3>{equip.slotId}</h3>
          <JsonViewer data={equip} />
        </div>
      ))}
    </>
  );
}
