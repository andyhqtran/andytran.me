'use client';
import flatten from 'lodash-es/flatten';
import { CSSProperties, useMemo } from 'react';
import { AutoSizer, InfiniteLoader, List, WindowScroller } from 'react-virtualized';

import { Player } from '~/components/player/Player';
import { usePlayers } from '~/swr/usePlayers';

export type PlayerListRowProps = {
  index: number;
  style: CSSProperties;
};

const PlayerListRow = ({ index, style }: PlayerListRowProps) => {
  return (
    <div key={index} style={style}>
      <Player fame={50000 - index * 100} id={`${index + 1}`} name={`Player ${index + 1}`} rank={index + 1} />
    </div>
  );
};

export type PlayerListProps = {
  jobId: string;
  jobGrowId: string;
};

export const PlayerList = ({ jobId, jobGrowId }: PlayerListProps) => {
  const { data, setSize, size } = usePlayers({ jobId, jobGrowId, serverId: 'all' });

  const players = useMemo(() => {
    return flatten(data?.map((data) => data.results));
  }, [data]);

  const totalResults = useMemo(() => {
    return data?.[size - 1]?.total_results;
  }, [data, size]);

  return (
    <AutoSizer defaultWidth={720} disableHeight>
      {({ width }) => {
        return (
          <WindowScroller serverHeight={720} serverWidth={720}>
            {({ height, isScrolling, registerChild, scrollTop }) => {
              return (
                <div
                  // @ts-expect-error - Look at this later
                  ref={registerChild}
                >
                  <InfiniteLoader
                    isRowLoaded={({ index }) => !!players[index]}
                    loadMoreRows={async () => setSize(size + 1)}
                    rowCount={totalResults}
                    minimumBatchSize={20}
                  >
                    {({ onRowsRendered, registerChild }) => (
                      <List
                        autoHeight
                        className='z-[-1]'
                        height={height}
                        isScrolling={isScrolling}
                        onRowsRendered={onRowsRendered}
                        ref={registerChild}
                        rowCount={players.length}
                        rowHeight={() => 96 + 16}
                        rowRenderer={PlayerListRow}
                        scrollTop={scrollTop}
                        width={width}
                      />
                    )}
                  </InfiniteLoader>
                </div>
              );
            }}
          </WindowScroller>
        );
      }}
    </AutoSizer>
  );
};
