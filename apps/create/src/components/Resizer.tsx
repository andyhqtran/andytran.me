'use client';
import classNames from 'classnames';
import type { ComponentProps } from 'react';
import { memo, useState } from 'react';

export type ResizerProps = ComponentProps<'div'> & {
  initialSize: number;
  onSizeChange: (value: number) => void;
  position: 'bottom' | 'left' | 'right' | 'top';
};

export const Resizer = memo(
  ({ className, initialSize, onMouseDown, onMouseMove, onMouseUp, onSizeChange, position = 'right' }: ResizerProps) => {
    const [canResize, setCanResize] = useState(false);
    const [initialPosition, setInitialPosition] = useState(0);
    const isVertical = position === 'left' || position === 'right';

    return (
      <div
        className={classNames(
          'group absolute flex select-none items-center',
          isVertical ? 'h-full w-2 cursor-col-resize flex-col' : 'h-2 w-full cursor-row-resize flex-row',
          position === 'bottom' ? '-bottom-2' : undefined,
          position === 'left' ? '-left-2' : undefined,
          position === 'right' ? '-right-2' : undefined,
          position === 'top' ? '-top-2' : undefined,
          className,
        )}
        onMouseDown={(event) => {
          if (isVertical) {
            if (position === 'left') {
              setInitialPosition(event.clientX + initialSize);
            } else {
              setInitialPosition(event.clientX - initialSize);
            }
          } else {
            if (position === 'top') {
              setInitialPosition(event.clientY + initialSize);
            } else {
              setInitialPosition(event.clientY - initialSize);
            }
          }
          setCanResize(true);
          onMouseDown?.(event);
        }}
        onMouseMove={(event) => {
          if (canResize && onSizeChange) {
            if (isVertical) {
              if (position === 'left') {
                onSizeChange(initialPosition - event.clientX);
              } else {
                onSizeChange(event.clientX - initialPosition);
              }
            } else {
              if (position === 'top') {
                onSizeChange(initialPosition - event.clientY);
              } else {
                onSizeChange(event.clientY - initialPosition);
              }
            }
          }

          onMouseMove?.(event);
        }}
        onMouseUp={(event) => {
          setCanResize(false);
          onMouseUp?.(event);
        }}
      >
        <div
          className={classNames(
            'pointer-events-none bg-blue-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100',
            isVertical ? 'h-full w-1' : 'h-1 w-full',
          )}
        />
        {canResize ? <div className='fixed inset-0 z-10 h-full w-full' /> : null}
      </div>
    );
  },
);

Resizer.displayName = 'Resizer';
