import styled from '@emotion/styled'
import { css } from '@styled-system/css'
import { motion } from 'framer-motion'
import { background, color, compose, flexbox, layout, position, space } from 'styled-system'
export const StyledTag = styled(motion.a)(
  {
    outline: 'none',
    display: 'block',
    width: 56,
    height: 56,
    borderRadius: '100%',
    overflow: 'hidden',
    cursor: 'pointer',
    userSelect: 'none'
  },
  css({
    backgroundColor: 'contrast'
  }),
  compose(
    background,
    color,
    flexbox,
    layout,
    position,
    space
  )
)