import { FetchNextPageOptions, InfiniteQueryObserverResult } from '@tanstack/react-query';
import { useWindowVirtualizer } from '@tanstack/react-virtual';
import { type ReactNode, useEffect, useLayoutEffect, useRef } from 'react';

import { type Character, type FetchCharactersResponse } from '~/fetchers/neople/fetchCharacters';

export type CharacterInfiniteListProps<Data, FetchData> = {
  characters: Data[];
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  onFetchNextPage: (options?: FetchNextPageOptions) => Promise<InfiniteQueryObserverResult<FetchData, unknown>>;
  getEstimateSize: (index: number) => number;
  renderCharacter: ({ character }: { character: Data; index: number }) => ReactNode;
  renderLoaderRow: ({ character }: { character: Data; index: number }) => ReactNode;
};

export const CharacertInfiniteList = <Data = Character, FetchData = FetchCharactersResponse>({
  characters,
  getEstimateSize,
  hasNextPage,
  isFetchingNextPage,
  onFetchNextPage,
  renderCharacter,
  renderLoaderRow,
}: CharacterInfiniteListProps<Data, FetchData>) => {
  const parentRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const [lastItem] = [...items].reverse();

    if (!lastItem) {
      return;
    }

    if (lastItem.index >= characters.length - 1 && hasNextPage && !isFetchingNextPage) {
      onFetchNextPage();
    }
  }, [hasNextPage, onFetchNextPage, isFetchingNextPage, items, characters.length]);

  return (
    <div ref={parentRef}>
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
          {items.map((virtualRow) => {
            const character = characters[virtualRow.index];
            const isLoaderRow = virtualRow.index > characters.length - 1;

            return (
              <div data-index={virtualRow.index} key={virtualRow.index} ref={virtualizer.measureElement}>
                {isLoaderRow
                  ? renderLoaderRow({ character, index: virtualRow.index })
                  : renderCharacter({ character, index: virtualRow.index })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
