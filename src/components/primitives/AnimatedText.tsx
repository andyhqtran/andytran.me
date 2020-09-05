import { MotionProps, motion, useReducedMotion } from 'framer-motion';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';

export type AnimatedTextProps = BoxProps &
  MotionProps & {
    text: string;
  };

export const AnimatedText = ({ text, ...restOfProps }: AnimatedTextProps) => {
  const shouldReduceMotion = useReducedMotion();
  const words = text?.split(' ');

  const wordAnimation = {
    hidden: {
      opacity: shouldReduceMotion ? 0 : 1,
      y: shouldReduceMotion ? 0 : '100%',
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 16,
        stiffness: 100,
        mass: 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.1,
      },
    }),
  };

  return (
    <Box {...restOfProps}>
      {words?.map((word, index) => {
        const isLastWord = words?.length - 1 === index;

        return (
          <>
            <Box
              key={index}
              sx={{ display: 'inline-block', overflow: 'hidden' }}
            >
              <Box
                as={motion.span}
                custom={index}
                initial='hidden'
                animate='visible'
                variants={wordAnimation}
                sx={{ display: 'block' }}
              >
                {word}
              </Box>
            </Box>
            {isLastWord ? '' : ' '}
          </>
        );
      })}
    </Box>
  );
};
