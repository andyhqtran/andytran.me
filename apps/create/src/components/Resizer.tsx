"use client";
import classNames from "classnames";
import { type ComponentProps, memo, useState } from "react";

export type ResizerProps = ComponentProps<"div"> & {
  initialSize: number;
  onSizeChange: (value: number) => void;
  position: "bottom" | "left" | "right" | "top";
};

export const Resizer = memo(
  ({
    className,
    initialSize,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onSizeChange,
    position = "right",
    ...restOfProps
  }: ResizerProps) => {
    const [canResize, setCanResize] = useState(false);
    const [initialPosition, setInitialPosition] = useState(0);
    const isBottom = position === "bottom";
    const isLeft = position === "left";
    const isRight = position === "right";
    const isTop = position === "top";
    const isVertical = isLeft || isRight;

    return (
      <button
        className={classNames(
          "group absolute flex select-none",
          isVertical
            ? "top-0 bottom-0 h-full w-3 cursor-col-resize flex-col"
            : "right-0 left-0 h-3 w-full cursor-row-resize flex-row",
          isLeft || isTop ? "items-end" : "items-start",
          isBottom ? "-bottom-3" : undefined,
          isLeft ? "-left-3" : undefined,
          isRight ? "-right-3" : undefined,
          isTop ? "-top-3" : undefined,
          className,
        )}
        onMouseDown={(event) => {
          if (isVertical) {
            if (position === "left") {
              setInitialPosition(event.clientX + initialSize);
            } else {
              setInitialPosition(event.clientX - initialSize);
            }
          } else {
            if (position === "top") {
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
              if (position === "left") {
                onSizeChange(initialPosition - event.clientX);
              } else {
                onSizeChange(event.clientX - initialPosition);
              }
            } else {
              if (position === "top") {
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
        {...restOfProps}
      >
        <div
          className={classNames(
            "pointer-events-none bg-blue-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            isVertical ? "h-full w-1" : "h-1 w-full",
          )}
        />
        {canResize ? (
          <div className="fixed inset-0 z-10 h-full w-full" />
        ) : null}
      </button>
    );
  },
);

Resizer.displayName = "Resizer";
