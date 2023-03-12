'use client';
import { ColumnDef, flexRender, getCoreRowModel, getExpandedRowModel, Row, useReactTable } from '@tanstack/react-table';
import classNames from 'classnames';
import { ComponentProps, Fragment } from 'react';

export type TableProps<TData> = Pick<ComponentProps<'div'>, 'className'> & {
  columns: ColumnDef<TData>[];
  data: TData[];
  getRowCanExpand: (row: Row<TData>) => boolean;
  renderSubComponent: (props: { row: Row<TData> }) => React.ReactElement;
};

export const Table = <TData extends Record<string, never>>({
  className,
  columns,
  data,
  getRowCanExpand,
  renderSubComponent,
}: TableProps<TData>) => {
  const table = useReactTable({
    columns,
    data,
    getRowCanExpand,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <table className={classNames(className)}>
      <thead className='border-b border-b-slate-4 bg-slate-2'>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <th className='h-10' colSpan={header.colSpan} key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div className='text-xs font-semibold'>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => {
          return (
            <Fragment key={row.id}>
              <tr className='text-sm'>
                {row.getVisibleCells().map((cell) => {
                  return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>;
                })}
              </tr>
              {row.getIsExpanded() && (
                <tr>
                  <td colSpan={row.getVisibleCells().length}>{renderSubComponent({ row })}</td>
                </tr>
              )}
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
};
