import 'react-json-view-lite/dist/index.css';

import { JsonViewer } from '~/components/JsonViewer';
import { getItemInformation } from '~/data/getItemInformation';

export default async function Page({ params }) {
  const itemInformation = await getItemInformation({ itemId: params.itemId });

  return (
    <>
      <h1>Item information</h1>
      <JsonViewer data={itemInformation} />
    </>
  );
}
