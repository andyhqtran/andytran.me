import { MotionProps, motion } from 'framer-motion';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type SVGProps = BoxProps<SVGElement> & MotionProps;

export const SVG = (props: SVGProps) => {
  return <Box as={motion.svg} xmlns='http://www.w3.org/2000/svg' {...props} />;
};

export type PathProps = BoxProps<SVGPathElement> & MotionProps;

export const Path = (props: PathProps) => {
  return <Box as={motion.path} {...props} />;
};

export type CircleProps = BoxProps<SVGCircleElement> & MotionProps;

export const Circle = (props: CircleProps) => {
  return <Box as={motion.circle} {...props} />;
};
