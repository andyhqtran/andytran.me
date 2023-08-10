'use client';
import { collapseAllNested, JsonView, Props as JsonViewProps } from 'react-json-view-lite';

export type JsonViewer = Pick<JsonViewProps, 'data'>;

export const JsonViewer = ({ data }: JsonViewer) => {
  return (
    <div className='text-slate-1'>
      <JsonView data={data} shouldInitiallyExpand={collapseAllNested} />
    </div>
  );
};
