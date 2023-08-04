'use client';
import { useState } from 'react';
import { AutoSizer, InfiniteLoader, List, WindowScroller } from 'react-virtualized';

import { Player } from '~/components/player/Player';

const PlayerListRow = ({ index, style }) => {
  return (
    <div key={index} style={style}>
      <Player fame={50000 - index * 100} id={`${index + 1}`} name={`Player ${index + 1}`} rank={index + 1} />
    </div>
  );
};

export const PlayerList = () => {
  const [page, setPage] = useState(1);
  const TEMP_DATA = Array.from({ length: page * 12 }, (_, i) => i + 1);

  return (
    <AutoSizer>
      {({ width }) => {
        return (
          <WindowScroller serverHeight={0} serverWidth={0}>
            {({ height, isScrolling, onChildScroll, scrollTop }) => {
              return (
                <InfiniteLoader
                  isRowLoaded={({ index }) => !!TEMP_DATA[index]}
                  loadMoreRows={async () => setPage((page) => page + 1)}
                  rowCount={300}
                >
                  {({ onRowsRendered, registerChild }) => (
                    <List
                      autoHeight
                      height={height}
                      isScrolling={isScrolling}
                      onChildScroll={onChildScroll}
                      onRowsRendered={onRowsRendered}
                      ref={registerChild}
                      rowCount={TEMP_DATA.length}
                      rowHeight={() => 96 + 16}
                      rowRenderer={PlayerListRow}
                      scrollTop={isScrolling ? scrollTop : undefined}
                      width={width}
                    />
                  )}
                </InfiniteLoader>
              );
            }}
          </WindowScroller>
        );
      }}
    </AutoSizer>
  );
};
