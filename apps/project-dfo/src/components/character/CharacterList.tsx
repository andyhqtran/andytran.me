'use client';
import { useWindowVirtualizer } from '@tanstack/react-virtual';
import { ReactNode, useLayoutEffect, useRef } from 'react';

import { Character } from '~/fetchers/fetchCharacters';

export type CharacterListProps = {
  characters: Character[];
  getEstimateSize?: (index: number) => number;
  renderCharacter: ({ character }: { character: Character; index: number }) => ReactNode;
};

export const CharacterList = ({ characters, getEstimateSize, renderCharacter }: CharacterListProps) => {
  const parentRef = useRef(null);

  const parentOffsetRef = useRef(0);

  useLayoutEffect(() => {
    parentOffsetRef.current = parentRef.current?.offsetTop ?? 0;
  }, []);

  const virtualizer = useWindowVirtualizer({
    count: characters.length,
    estimateSize: getEstimateSize,
    overscan: 4,
    scrollMargin: parentOffsetRef.current,
  });

  const items = virtualizer.getVirtualItems();

  return (
    <div className='relative z-[-1]' ref={parentRef}>
      <div
        className='relative w-full'
        style={{
          height: virtualizer.getTotalSize(),
        }}
      >
        <div
          className='absolute left-0 top-0 flex w-full flex-col'
          style={{
            transform: `translateY(${items[0].start - virtualizer.options.scrollMargin}px)`,
          }}
        >
          {items.map((virtualRow) => (
            <div
              key={virtualRow.key}
              data-character-id={characters[virtualRow.index].characterId}
              data-index={virtualRow.index}
              ref={virtualizer.measureElement}
            >
              {renderCharacter({ character: characters[virtualRow.index], index: virtualRow.index })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
