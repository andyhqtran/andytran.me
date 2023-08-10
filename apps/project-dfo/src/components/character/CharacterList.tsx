'use client';
import { CSSProperties, type ReactNode } from 'react';
import { AutoSizer, type Index, List, WindowScroller } from 'react-virtualized';

import { Character } from '~/data/getCharacters';

export type CharacterListProps = {
  characters: Character[];
  rowHeight: number | ((params: Index) => number);
  rowRenderer: (props: { character: Character; index: number; style: CSSProperties }) => ReactNode;
};

export const CharacterList = ({ characters, rowRenderer, rowHeight }: CharacterListProps) => {
  return (
    <AutoSizer defaultWidth={720} disableHeight>
      {({ width }) => {
        return (
          <WindowScroller serverHeight={720} serverWidth={720}>
            {({ height, isScrolling, onChildScroll, scrollTop }) => {
              return (
                <List
                  autoHeight
                  height={height}
                  isScrolling={isScrolling}
                  onChildScroll={onChildScroll}
                  rowCount={characters.length}
                  rowHeight={rowHeight}
                  rowRenderer={({ index, style }) =>
                    rowRenderer({
                      character: characters[index],
                      index,
                      style,
                    })
                  }
                  scrollTop={scrollTop}
                  width={width}
                />
              );
            }}
          </WindowScroller>
        );
      }}
    </AutoSizer>
  );
};
